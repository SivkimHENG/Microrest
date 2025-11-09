"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_HANDLERS = void 0;
const authenticate_handler_1 = require("./handlers/authenticate.handler");
const registeration_handler_1 = require("./handlers/registeration.handler");
exports.EVENT_HANDLERS = {
    "UserRegistered": registeration_handler_1.handleUserRegistered,
    "UserAuthenticate": authenticate_handler_1.handleUserAuthenticate
};
