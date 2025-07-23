"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("../shop/customer/router/route"));
const routes_1 = __importDefault(require("../api/auth/routes"));
const router = (0, express_1.default)();
router.use("/customer", route_1.default);
router.use("/auth", routes_1.default);
exports.default = router;
