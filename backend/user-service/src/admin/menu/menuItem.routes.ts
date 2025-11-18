
import { Router } from "express";
import { menuItemController } from "./menuItem.controller";
import { JWTAuthentication, requiredRole } from "../../middleware/auth.middleware";


export const menuItemRouter = Router();


menuItemRouter.post("admin/menu-items",
  JWTAuthentication, requiredRole(["ADMIN"]),
  menuItemController.create)

menuItemRouter.put("admin/menu-items/:uuid",
  JWTAuthentication, requiredRole(["ADMIN"]),
  menuItemController.update)

menuItemRouter.delete("admin/menu-items/:uuid",
  JWTAuthentication, requiredRole(["ADMIN"]),
  menuItemController.delete)
