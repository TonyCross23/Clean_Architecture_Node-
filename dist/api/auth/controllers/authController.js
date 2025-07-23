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
exports.AuthController = void 0;
const catchAsync_1 = require("../../../configs/catchAsync");
const httpStatusCodes_1 = require("../../../configs/httpStatusCodes");
const inversify_1 = require("inversify");
const appConst_1 = require("../utils/appConst");
let AuthController = class AuthController {
    interactor;
    constructor(interactor) {
        this.interactor = interactor;
        this.interactor = interactor;
    }
    registerUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
        const { name, email, phone, password } = req.body;
        const user = await this.interactor.register({ name, email, phone, password });
        res.status(httpStatusCodes_1.HTTP_STATUS.CREATED).json({
            status: "success",
            data: {
                user
            }
        });
    });
};
exports.AuthController = AuthController;
exports.AuthController = AuthController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(appConst_1.INTERFACE_TYPE.AuthInteractor))
], AuthController);
