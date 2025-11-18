import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";

function isValidJwtPayload(payload: string | JwtPayload): payload is {
  userId: number;
  userUuid: string;
  roles: string[];
} {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'userId' in payload &&
    'userUuid' in payload &&
    'roles' in payload &&
    typeof payload.userId === 'number' &&
    typeof payload.userUuid === 'string' &&
    Array.isArray(payload.roles)
  );
}

export function JWTAuthentication(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: 'No token provided'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Validate the decoded payload structure
    if (!isValidJwtPayload(decoded)) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: 'Invalid token payload structure'
      });
    }

    req.user = decoded;
    next();
  } catch (err: any) {
    const errorMessage = err.name === 'TokenExpiredError'
      ? 'Token expired'
      : 'Invalid token';

    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: errorMessage
    });
  }
}

export function requiredRole(allowedRole: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if user exists (should be set by JWTAuthentication)
    if (!req.user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: 'Authentication required'
      });
    }

    const userRoles = req.user.roles;
    const hasRoles = allowedRole.some(role => userRoles.includes(role));

    if (!hasRoles) {
      return res.status(StatusCodes.FORBIDDEN).json({
        error: 'Insufficient permissions',
        required: allowedRole,
        userRoles: userRoles
      });
    }

    next();
  };
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        userUuid: string;
        roles: string[];
      };
    }
  }
}
