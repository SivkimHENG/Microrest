import { Request, Response, NextFunction } from "express";


export function checkAuthorization(requiredRole: string) {

  return async (req: Request, res: Response, next: NextFunction) => {

    const userId = req.user?.userId;







  }



}
