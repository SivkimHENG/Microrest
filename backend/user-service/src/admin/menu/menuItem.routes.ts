
import { Router } from "express";
import { menuItemController } from "./menuItem.controller";


export const menuItemRouter = Router();


menuItemRouter.post("/menu-items", menuItemController.create)
