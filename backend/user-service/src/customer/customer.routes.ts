import { Router } from "express";
import { customerController } from "./customer.controllers";
import { authMiddleware } from "../middleware/authentication.middleware";
import { authorizate } from "../middleware/authorization.middleware";




export const router = Router();


//TODO: Done
router.get("/profile", authMiddleware, customerController.getProfile);
router.put("/profile", authMiddleware, customerController.updateProfile);

//TODO: Undone





