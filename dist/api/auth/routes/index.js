"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../../middlewares/validate");
const auth_validation_1 = require("../validation/auth.validation");
const container_1 = __importDefault(require("../config/container"));
const appConst_1 = require("../utils/appConst");
const authRouter = (0, express_1.default)();
const authController = container_1.default.get(appConst_1.INTERFACE_TYPE.AuthController);
authRouter.post("/register", (0, validate_1.validate)(auth_validation_1.registerSchema), authController.registerUser);
exports.default = authRouter;
