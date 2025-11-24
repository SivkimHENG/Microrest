import { Router } from "express";
import { menuController } from "./menu.controller";
import { JWTAuthentication, requiredRole } from "../middleware/auth.middleware";

export const menuRouter = Router();

//TODO: DONE
menuRouter.get("/menu-items/search",
  JWTAuthentication,
  requiredRole(['ADMIN', 'CUSTOMER']),
  menuController.searchMenuItem);

menuRouter.get("/category/search",
  JWTAuthentication,
  requiredRole(['ADMIN', 'CUSTOMER']),
  menuController.searchCategory);

menuRouter.get("/menu-items/category/search",
  JWTAuthentication,
  requiredRole(['ADMIN', 'CUSTOMER']),
  menuController.searchMenuItemsByCategoryName);


menuRouter.get("/menu-items/",
  JWTAuthentication,
  requiredRole(['ADMIN', 'CUSTOMER']),
  menuController.listMenuItems);

menuRouter.get("/categories",
  JWTAuthentication,
  requiredRole(['ADMIN', 'CUSTOMER']),
  menuController.listCategories);

