import { Request } from 'express';

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
}

export interface UserRegistration {
  email: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface DecodedToken {
  sub: string;
  email: string;
  preferred_username: string;
  realm_access?: {
    roles: string[];
  };
  resource_access?: {
    [key: string]: {
      roles: string[];
    };
  };
  exp: number;
  iat: number;
}

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
}




