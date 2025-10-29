import { Router } from "express";
import { register, login, loggedout, refreshToken } from "../controller/auth.controller"
import { authenticate } from "../middleware/auth.middleware";

const router = Router();



//TODO: DONE 
router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticate, loggedout);

//TODO: UNDONE
router.post("/refresh-token", refreshToken);




export default router;

