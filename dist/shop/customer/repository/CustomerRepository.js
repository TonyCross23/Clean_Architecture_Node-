"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const prismaClient_1 = __importDefault(require("../../../libs/prismaClient"));
class CustomerRepository {
    async getAllCustomer() {
        const customers = await prismaClient_1.default.customer.findMany();
        console.log("Retrieved customers:", customers);
        return customers;
    }
    async create(data) {
        const customer = await prismaClient_1.default.customer.create({
            data: {
                customer_name: data.customer_name,
                email: data.email,
                phone: data.phone,
                address: data.address
            }
        });
        return customer;
    }
}
exports.CustomerRepository = CustomerRepository;
