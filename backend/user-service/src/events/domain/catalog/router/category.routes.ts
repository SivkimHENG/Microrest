import { Router } from "express";
import { CategoryController } from "../controller/category.controller";
import { JWTAuthentication, requiredRole } from "../../../../middleware/auth.middleware";


const controller = new CategoryController()
export const router = Router();

router.post("/categories", JWTAuthentication, requiredRole(["ADMIN"]), controller.create);
router.put("/categories", JWTAuthentication, requiredRole(["ADMIN"]), controller.update);
router.delete("/categories", JWTAuthentication, requiredRole(["ADMIN"]), controller.delete);
