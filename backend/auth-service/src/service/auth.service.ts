import { prisma } from "../database";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from "../utils/jwt";
import { Roles } from "../../generated/prisma";





async function logAuditEvent(data: {
  action: string,
  success: boolean,
  ipAddress?: string,
  deviceInfo?: string,
  userId?: number
}) {

  try {

    var userId: number | null = null;

    if (data.userId) {
      const user = await prisma.userCredential.findUnique({
        where: {
          id: data.userId
        },
        select: { id: true }
      });

      userId = user?.id || null;
    }

    await prisma.auditLog.create({
      data: {
        action: data.action,
        success: data.success,
        ipAddress: data.ipAddress,
        userId
      }
    });


  } catch (err: any) {
    console.error("Failed to log audit Event", err);

  }



}



export async function userRegister(email: string, password: string, meta: { ipAddress: string, deviceInfo: string }) {
  try {
    const userUuid = uuidv4();
    const hashed = await bcrypt.hash(password, 12);
    const refreshTokenRaw = uuidv4();
    const refreshTokenHash = await bcrypt.hash(refreshTokenRaw, 12);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)


    const result = await prisma.$transaction(async (transaction) => {
      const user = await transaction.userCredential.create({
        data: {
          email,
          passwordHash: hashed,
          userUuid,

        },
      });


      await transaction.refreshToken.create({
        data: {
          userId: user.id,
          tokenHash: refreshTokenHash,
          expiresAt,
          ipAddress: meta.ipAddress,
          deviceInfo: meta.deviceInfo ?? null,
        }

      })

      await transaction.userRole.create({
        data: {
          role: Roles.CUSTOMER,
          userId: user.id
        }
      });

      await transaction.auditLog.create({
        data: {
          action: "REGISTER_SUCCESS",
          success: true,
          ipAddress: meta.ipAddress,
          userAgent: meta.deviceInfo ?? null,
          userId: user.id,
        }

      });

      return transaction.userCredential.findUnique({
        where: {
          id: user.id
        },
        include: {
          roles: true,
          refreshTokens: true,
          auditLogs: true
        },
      });
    });

    const accessToken = generateAccessToken({
      userId: result!.id,
      userUuid: result!.userUuid,
      roles: result!.roles.map((r) => r.role)
    });

    return {
      user: result,
      accessToken,
      refreshToken: refreshTokenRaw
    };


  } catch (error: any) {
    console.error('Registration error details:', error);
    console.error('Error code:', (error as any).code);
    console.error('Error meta:', (error as any).meta);
    throw error;
  }

}


export async function authenticated(email: string, password: string,
  meta: { ipAddress: string, deviceInfo: string }) {
  try {
    const user = await prisma.userCredential.findUnique({
      where: {
        email: email
      },
      include: {
        roles: true,
        refreshTokens: true
      }
    });



    const isPasswordValid = user ?
      await bcrypt.compare(password, user.passwordHash)
      : await bcrypt.compare(password, "$2a$12$dummyhashtopreventtimingattack");




    if (!user || !isPasswordValid) {
      await prisma.auditLog.create({
        data: {
          action: "LOGIN_FAILED",
          success: false,
          ipAddress: meta.ipAddress,
          userAgent: meta.deviceInfo ?? null,
          userId: user?.id ?? null,
        },
      });
      throw new Error("Invalid email or password");
    }



    const refreshTokenRaw
      = generateRefreshToken({ userId: user.id, userUuid: user.userUuid });
    const refreshTokenHash = await bcrypt.hash(refreshTokenRaw, 12);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: refreshTokenHash,
        expiresAt,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo ?? null,
      },
    });

    const accessToken = generateAccessToken({
      userId: user.id,
      userUuid: user.userUuid,
      roles: user.roles.map((r) => r.role),
    });

    await prisma.auditLog.create({
      data: {
        action: "LOGIN_SUCCESS",
        success: true,
        ipAddress: meta.ipAddress,
        userAgent: meta.deviceInfo ?? null,
        userId: user.id,
      },
    });

    return {
      user: {
        userId: user.id,
        userUuid: user.userUuid,
        email: user.email,
        roles: user.roles.map((r) => r.role)
      },
      accessToken,
      refreshToken: refreshTokenRaw
    };


  } catch (err: any) {
    console.error("Login error:", err);
    throw err;
  }


}


export async function logout(refreshToken: string, userId: number,
  meta: { ipAddress: string, deviceInfo: string }) {

  try {

    const decoded = verifyRefreshToken(refreshToken);


    if (decoded.userId !== userId) {
      await logAuditEvent({
        action: "LOGOUT FAILED MISMATCH TOKEN",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: userId
      });
      throw new Error("Token does not belong to this user");
    }


    const user = await prisma.userCredential.findUnique({
      where: { id: userId },
      include: { roles: true }
    });
    if (!user) {
      await logAuditEvent({
        action: "LOGOUT FAILED",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: userId
      });
      throw new Error("User not found");
    }


    const activeToken = await prisma.refreshToken.findMany({
      where: {
        userId: user.id,
        expiresAt: { gt: new Date() },
        revokedAt: null,
      }
    });


    if (activeToken.length === 0) {
      await logAuditEvent({
        action: "LOGOUT FAILED NO ACTIVE SESSION",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: user.id
      });
      throw new Error("No active session found");
    }


    let matchedToken = null;
    for (const token of activeToken) {
      const isMatch = await bcrypt.compare(refreshToken, token.tokenHash);
      if (isMatch) {
        matchedToken = token;
        break;
      }


    }

    if (!matchedToken) {
      await logAuditEvent({
        action: "LOGOUT FAILED INVALID TOKEN",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: user.id
      });

      throw new Error("Invalid refresh token");
    }


    await prisma.refreshToken.update({
      where: {
        id: matchedToken.id
      },
      data: {
        revokedAt: new Date()
      }
    });



    await logAuditEvent({
      action: "LOGOUT_SUCCESS",
      success: true,
      ipAddress: meta.ipAddress,
      deviceInfo: meta.deviceInfo,
      userId: user.id
    })

    return {
      success: true,
      message: "Logged out successfully"
    }


  } catch (err: any) {
    await prisma.auditLog.create({
      data: {
        action: "LOGOUT_FAILED",
        success: false,
        ipAddress: meta.ipAddress,
        userAgent: meta.deviceInfo ?? null,
        userId: userId
      }
    });

    console.error("Logout error:", err);
    throw err;
  }

}



export async function refreshNewToken(oldRefreshToken: string,
  meta: { ipAddress: string, deviceInfo: string }) {
  try {


    const decoded = verifyRefreshToken(oldRefreshToken);


    const user = await prisma.userCredential.findUnique({
      where: {
        id: decoded.userId
      },
      include: {
        roles: true
      }
    });


    if (!user) {
      await logAuditEvent({
        action: "REFRESH_TOKEN_FAILED_USER_NOT_FOUND",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: decoded.userId
      });
      throw new Error("USER_NOT_FOUND");
    }

    const storeToken = await prisma.refreshToken.findMany({
      where: {
        userId: user.id,
        expiresAt: { gt: new Date() },
        revokedAt: null
      }
    });


    if (storeToken.length === 0) {
      await logAuditEvent({
        action: "REFRESH_TOKEN_FAILED_NO_ACTIVE_SESSION",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: user.id
      });
      throw new Error('NO_ACTIVE_SESSION');
    }


    let matchedToken = null;

    for (const token of storeToken) {
      const isMatch = await bcrypt.compare(oldRefreshToken, token.tokenHash);
      if (isMatch) {
        matchedToken = token;
        break;
      }
    }

    if (!matchedToken) {
      await logAuditEvent({
        action: "REFRESH_TOKEN_FAILED_INVALID_TOKEN",
        success: false,
        ipAddress: meta.ipAddress,
        deviceInfo: meta.deviceInfo,
        userId: user.id
      })
      throw new Error('INVALID_REFRESH_TOKEN');
    }


    const tokenPayload = {
      userId: user.id,
      userUuid: user.userUuid,
      roles: user.roles.map(r => r.role)
    }


    const newAccessToken = generateAccessToken(tokenPayload);
    const newRefreshToken = generateRefreshToken({
      userId: user.id,
      userUuid: user.userUuid
    });


    const newRefreshTokenHash = await bcrypt.hash(newRefreshToken, 10);


    await prisma.$transaction([
      prisma.refreshToken.update({
        where: { id: matchedToken.id },
        data: { revokedAt: new Date() }
      }),

      prisma.refreshToken.create({
        data: {
          userId: user.id,
          tokenHash: newRefreshTokenHash,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        }
      })
    ]);



    await logAuditEvent({
      action: "REFRESH_TOKEN_SUCCESS",
      success: true,
      ipAddress: meta.ipAddress,
      deviceInfo: meta.deviceInfo,
      userId: user.id
    });


    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      user: {
        userId: user.id,
        userUuid: user.userUuid,
        email: user.email,
        roles: tokenPayload.roles
      }
    };
  } catch (err: any) {

    await prisma.auditLog.create({
      data: {
        action: "FAILED_REFRESH_TOKEN",
        success: false,
        ipAddress: meta.ipAddress,
        userAgent: meta.deviceInfo ?? null,
        userId: null
      }
    });

    console.error("Failed to refresh Token:", err);
    throw err;
  }



}


