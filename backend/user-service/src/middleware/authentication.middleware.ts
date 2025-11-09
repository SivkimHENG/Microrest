
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { verifyAccessToken } from "../utils/jwt.utils";

export interface AuthRequest extends Request {
  user?: {
    userId: number
    userUuid: string
    roles: string[]
  }


}


export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction): void {

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Missing or Invalid token"
      });
      return;
    }

    const token = authHeader.substring(7);
    const decoded = verifyAccessToken(token);
    req.user = decoded;

    console.log(`Auth: ${decoded.userUuid} with roles: ${decoded.roles.join(',')}`);
    next();

  } catch (err: any) {
    console.error("Auth Error:", err.message);
    res.status(StatusCodes.FORBIDDEN).json({
      error: err.message
    });
    return;
  }
}
