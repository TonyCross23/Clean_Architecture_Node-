"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    email;
    phone;
    password;
    id;
    constructor(name, email, phone, password, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.id = id;
    }
}
exports.User = User;
