import { Router } from "express";
import { menuController } from "./menu.controller";

export const menuRouter = Router();

//TODO: DONE
menuRouter.get("/menu-items/search", menuController.searchMenuItem);
menuRouter.get("/category/search", menuController.searchCategory);
menuRouter.get("/menu-items/category/search", menuController.searchMenuItemsByCategoryName);


//NOTE: List all menu for the customer views x
menuRouter.get("/menu-items/", menuController.listMenuItems);
menuRouter.get("/categories", menuController.listCategories);



