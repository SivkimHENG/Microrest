import { Request, Response, NextFunction } from "express";
import { HttpService } from "../services/http-service";
import { serviceConfig } from "../config/service.config";



class AuthMiddleware {


    private authService: HttpService;
    private cache_TTL: number;
    constructor() {
        this.authService = new HttpService(serviceConfig.AUTH_SERVICE);
        this.cache_TTL = 300;
    }



    authenticate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers['authorization'];
            if (!authHeader) {
                return res.status(401).json({ message: 'Authorization header missing' });
            }
            next();
        } catch (error) {   
            return res.status(500).json({ message: 'Internal server error' });
        }

    }



}