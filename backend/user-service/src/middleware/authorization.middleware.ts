import { Response, NextFunction } from "express";
import { AuthRequest } from "./authentication.middleware";
import { StatusCodes } from "http-status-codes";


export function authorizate(...roles: string[]) {

  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        error: "Unauthorized request from user"
      });
      return;
    }
    const hasRoles = roles.some(role => req.user!.roles.includes(role));
    if (!hasRoles) {
      console.warn(` Access denied: ${req.user.userUuid}. Required: [${roles}], Has: [${req.user.roles}]`);
      res.status(403).json({ error: 'Forbidden - insufficient permissions' });
      return;
    }
    console.log(`✓ Authorized: ${req.user.userUuid} has roles: [${req.user.roles}]`);
    next();
  }
}
