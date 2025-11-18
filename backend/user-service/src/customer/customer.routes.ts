import { Router } from "express";
import { customerController } from "./customer.controllers";
import { JWTAuthentication, requiredRole } from "../middleware/auth.middleware";




export const router = Router();


router.get("/profile",
  JWTAuthentication, requiredRole(["ADMIN"]),
  customerController.getProfile);
router.get("/profile/user",
  JWTAuthentication, requiredRole(["ADMIN"]),
  customerController.searchProfile)

router.put("/profile",
  JWTAuthentication, requiredRole(["ADMIN"]),
  customerController.updateProfile);







