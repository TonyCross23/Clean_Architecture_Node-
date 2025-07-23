"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const inversify_1 = require("inversify");
const utils_1 = require("../utils");
let CustomerController = class CustomerController {
    interator;
    constructor(interator) {
        this.interator = interator;
        this.interator = interator;
    }
    createCustomer = async (req, res, next) => {
        try {
            const data = req.body;
            const customer = await this.interator.onCreateCustomer(data);
            console.log("Customer created successfully:", customer);
            res.status(201).json({
                message: "Customer created successfully",
                data: customer
            });
        }
        catch (error) {
            next(error);
        }
    };
    getAllCustomer = async (req, res, next) => {
        try {
            const customer = await this.interator.getAllCustomer();
            res.status(200).json({
                message: "Customers retrieved successfully",
                data: customer
            });
        }
        catch (error) {
            next(error);
        }
    };
};
exports.CustomerController = CustomerController;
exports.CustomerController = CustomerController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(utils_1.INTERFACE_TYPE.CustomerRepository))
], CustomerController);
