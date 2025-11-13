import { Router } from "express";
import { customerController } from "./customer.controllers";
import { authMiddleware } from "../middleware/authentication.middleware";




export const router = Router();


//TODO: Done
router.get("/profile", authMiddleware, customerController.getProfile);
router.get("/profile/user", authMiddleware, customerController.searchProfile)
router.put("/profile", authMiddleware, customerController.updateProfile);

//TODO: Undone







