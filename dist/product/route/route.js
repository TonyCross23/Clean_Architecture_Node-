"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../utils");
const container_1 = __importDefault(require("../config/container"));
const productRoute = (0, express_1.Router)();
const controller = container_1.default.get(utils_1.INTERFACE_TYPE.ProductController);
productRoute.post("/create", controller.crateProduct.bind(controller));
productRoute.get("/", controller.getAllProducts);
exports.default = productRoute;
