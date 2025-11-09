import jwt from 'jsonwebtoken';

interface AccessTokenPayload {
  userId: number;
  userUuid: string;
  roles: string[];
}

const JWT_CONFIG = {
  issuer: "auth-service",
  audience: "client",
  accessTokenExpiry: "15m",
  refreshTokenExpiry: "7d"
}




export function verifyAccessToken(token: string): AccessTokenPayload {
  const secret = process.env.JWT_SECRET;
  if (!secret)
    throw new Error("JWT_SECRET is not defined is environment")


  try {
    const decoded = jwt.verify(token, secret, {
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
      algorithms: ["HS256"]
    }) as AccessTokenPayload;

    return decoded;

  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      throw new Error('TOKEN_EXPIRED');
    }
    if (err.name === 'JsonWebTokenError') {
      throw new Error('INVALID_TOKEN');
    }
    throw new Error('TOKEN_VERIFICATION_FAILED');
  }
}




