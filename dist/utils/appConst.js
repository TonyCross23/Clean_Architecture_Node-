"use strict";
// const productRepository = new ProductRepository();
// const productInteractor = new ProductInteractor(productRepository);
// const controller = new ProductController(productInteractor);
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERFACE_TYPE = void 0;
exports.INTERFACE_TYPE = {
    ProductRepository: Symbol.for("ProductRepository"),
    ProductInteractor: Symbol.for("ProductInteractor"),
    ProductController: Symbol.for("ProductController")
};
