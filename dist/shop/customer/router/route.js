"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const container_1 = __importDefault(require("../config/container"));
const utils_1 = require("../utils");
const customerRoute = (0, express_1.Router)();
const controller = container_1.default.get(utils_1.INTERFACE_TYPE.CustomerController);
customerRoute.post('/', controller.createCustomer);
customerRoute.get('/', controller.getAllCustomer);
exports.default = customerRoute;
