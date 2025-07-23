"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = (0, zod_1.object)({
    name: (0, zod_1.string)().nonempty("Name is required"),
    email: (0, zod_1.string)().nonempty("Email is required").email("Not a valid email"),
    phone: (0, zod_1.string)().nonempty("Phone number is required").min(10, "Phone number must be at least 10 digits"),
    password: (0, zod_1.string)().nonempty("Password is required").min(6, "Password too short - should be 6 chars minimum"),
    confirmPassword: (0, zod_1.string)().nonempty("Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});
