import * as express from "express"


declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        username: string;
        email: string;
        roles: string[];
        permissions: string[];
        iat?: number;
        exp?: number;
      };
    }
  }
}