import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      services?: any; // Replace 'any' with a more specific type if known
      token: string;
    }

  }
}

declare global {
  namespace Express {
    interface User {
      userId?: number;
      userUuid: string;
      roles: string[];
    }
  }
}

