import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import passport from "passport";

export const isAuthenticated =
  (req: Request, res: Response, next: NextFunction) => {
    try {

      if (req.isAuthenticated())
        return next();

      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Unauthorized - Please login in"
      });

    } catch (err: any) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Unauthorized - Please login in"
      });

    }

  }

export const isNotAuthenticated =
  (req: Request, res: Response, next: NextFunction) => {
    try {

      if (!req.isAuthenticated())
        return next();

      res.status(StatusCodes.FORBIDDEN).json({
        message: "Already authenticated"
      });

    } catch (err: any) {
      res.status(StatusCodes.FORBIDDEN).json({
        message: "Already authenticated"
      });

    }

  }

export const authenticate =
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false },
      (err: any, user: any, info: any) => {
        if (err)
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Authentication error"
          });

        if (!user)
          return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "User Unauthorized"
          });


        req.user = user;
        next();

      })(req, res, next);


  }


export const hasRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated())
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Unauthorized"
      });


    const user = req.user as any;
    const userRoles = user.roles || [];


    const hasRequiredRole = roles.some(role => userRoles.includes(role));
    if (hasRequiredRole)
      return next();


    return res.status(StatusCodes.FORBIDDEN).json({
      message: "Forbidden - Insufficient Permission"
    });

  }

};


