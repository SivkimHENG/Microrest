
import { Router } from "express";
import { menuItemController } from "./menuItem.controller";


export const menuItemRouter = Router();


menuItemRouter.post("/menu-items", menuItemController.create)
menuItemRouter.put("/menu-items/:uuid", menuItemController.update)
menuItemRouter.delete("/menu-items/:uuid", menuItemController.delete)
