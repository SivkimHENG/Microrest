import { NextFunction, Request, Response } from "express";
import passport from "passport";


interface ApiResponse {
  statusCode: number
  errorMsg: string
  data: any
}

interface JwtUser {
  id: number
  email: string
}




function auth(req: Request, res: Response, next: NextFunction) {

  var response = {
    statusCode: 0,
    errorMsg: "",
    data: {}
  }

  passport.authenticate('jwt', (err: any, user: JwtUser | null, info: { message: string } | undefined) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      const response: ApiResponse = {
        statusCode: 401,
        errorMsg: "user not authenticate",
        data: info?.message ?? {},
      }
      return res.status(401).json(response);
    }

    req.user = user;
    next();
  })(req, res, next);
}

export { auth }
