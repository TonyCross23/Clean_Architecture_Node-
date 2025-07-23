"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    customer_name;
    email;
    phone;
    address;
    constructor(customer_name, email, phone, address) {
        this.customer_name = customer_name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
exports.Customer = Customer;
