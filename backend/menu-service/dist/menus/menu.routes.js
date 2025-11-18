"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRouter = void 0;
const express_1 = require("express");
const menu_controller_1 = require("./menu.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
exports.menuRouter = (0, express_1.Router)();
//TODO: DONE
exports.menuRouter.get("/menu-items/search", auth_middleware_1.JWTAuthentication, (0, auth_middleware_1.requiredRole)(['ADMIN', 'CUSTOMER']), menu_controller_1.menuController.searchMenuItem);
exports.menuRouter.get("/category/search", auth_middleware_1.JWTAuthentication, (0, auth_middleware_1.requiredRole)(['ADMIN', 'CUSTOMER']), menu_controller_1.menuController.searchCategory);
exports.menuRouter.get("/menu-items/category/search", auth_middleware_1.JWTAuthentication, (0, auth_middleware_1.requiredRole)(['ADMIN', 'CUSTOMER']), menu_controller_1.menuController.searchMenuItemsByCategoryName);
exports.menuRouter.get("/menu-items/", auth_middleware_1.JWTAuthentication, (0, auth_middleware_1.requiredRole)(['ADMIN', 'CUSTOMER']), menu_controller_1.menuController.listMenuItems);
exports.menuRouter.get("/categories", auth_middleware_1.JWTAuthentication, (0, auth_middleware_1.requiredRole)(['ADMIN', 'CUSTOMER']), menu_controller_1.menuController.listCategories);
