"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const prismaClient_1 = __importDefault(require("../../libs/prismaClient"));
class ProductRepository {
    async getAllProduct() {
        const products = await prismaClient_1.default.product.findMany();
        return products;
    }
    async create(data) {
        const product = await prismaClient_1.default.product.create({
            data: {
                name: data.name,
                price: data.price,
                description: data.description,
                stock: data.stock
            }
        });
        return product;
    }
}
exports.ProductRepository = ProductRepository;
