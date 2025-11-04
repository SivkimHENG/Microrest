"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
//TODO: DONE 
router.post("/register", auth_controller_1.register);
router.post("/login", auth_controller_1.login);
router.post("/logout", auth_middleware_1.authenticate, auth_controller_1.loggedout);
//TODO: UNDONE
router.post("/refresh-token", auth_controller_1.refreshToken);
exports.default = router;
