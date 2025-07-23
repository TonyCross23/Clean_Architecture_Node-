"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    description;
    stock;
    id;
    constructor(name, price, description, stock, id) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.id = id;
    }
}
exports.Product = Product;
