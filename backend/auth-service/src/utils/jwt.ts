import jwt from 'jsonwebtoken';

interface AccessTokenPayload {
  userId: number;
  userUuid: string;
  roles: string[];
}

interface RefreshTokenPayload {
  userId: number;
  userUuid: string;
}
const JWT_CONFIG = {
  issuer: "auth-service",
  audience: "client",
  accessTokenExpiry: "15m",
  refreshTokenExpiry: "7d"
}




export function generateAccessToken(payload: {
  userId: number,
  userUuid: string,
  roles: string[]
}): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const token = jwt.sign(
    {
      userId: payload.userId,
      userUuid: payload.userUuid,
      roles: payload.roles
    },
    secret,
    {
      expiresIn: JWT_CONFIG.accessTokenExpiry,
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
      algorithm: 'HS256'
    } as jwt.SignOptions
  );

  return token;
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



export function generateRefreshToken(payload: {
  userId: number,
  userUuid: string
}): string {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const token = jwt.sign(
    {
      userId: payload.userId,
      userUuid: payload.userUuid
    },
    secret,
    {
      expiresIn: JWT_CONFIG.refreshTokenExpiry,
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
      algorithm: "HS256"
    } as jwt.SignOptions
  );

  return token;
}


export function verifyRefreshToken(token: string): RefreshTokenPayload {

  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) {
    throw new Error('JWT_REFRESH_SECRET is not defined in environment variables');
  }
  try {

    const decoded = jwt.verify(token, secret, {
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
      algorithms: ["HS256"]
    }) as RefreshTokenPayload;

    return decoded;
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      throw new Error('REFRESH_TOKEN_EXPIRED');
    }
    if (err.name === 'JsonWebTokenError') {
      throw new Error('INVALID_REFRESH_TOKEN');
    }
    throw new Error('REFRESH_TOKEN_VERIFICATION_FAILED');
  }
}


export function decodeToken(token: string) {
  try {
    return jwt.decode(token)
  } catch (err: any) {
    return null;
  }

}

