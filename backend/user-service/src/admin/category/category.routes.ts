import { Router } from "express";
import { categoryController } from "./category.controller";
import { JWTAuthentication, requiredRole } from "../../middleware/auth.middleware";




export const categoryRouter = Router();

//TODO: Middlewaring the protected endpoints
categoryRouter.post('/admin/categories',
  JWTAuthentication, requiredRole(["ADMIN"]), categoryController.create);

categoryRouter.put('/admin/categories/:uuid',
  JWTAuthentication, requiredRole(["ADMIN"]), categoryController.update);

categoryRouter.delete('/admin/categories/:uuid',
  JWTAuthentication, requiredRole(["ADMIN"]), categoryController.delete);
