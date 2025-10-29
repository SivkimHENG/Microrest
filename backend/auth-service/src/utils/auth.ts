import { Request } from "express";



export enum Roles {
  "CUSTOMER",
  "ADMIN"
}

export interface JwtPayload {
  sub: string,
  email: string,
  roles: Roles[],
  iat?: number,
  exp?: number,
  iss?: string,
  aud?: string
}


export interface AuthUser {
  userUuid: string,
  email: string,
  roles: Roles[]
}

//export interface RequestWithUser extends Request {
//  user?: AuthUser;
//}


export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}







