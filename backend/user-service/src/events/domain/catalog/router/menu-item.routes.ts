import { Router } from "express";
import { MenuItemController } from "../controller/menu-items.controller";



export const router = Router();

const controller = new MenuItemController();

router.post("/menuitem", controller.create);
router.put("/menuitem", controller.update);
router.delete("/menuitem", controller.delete);
