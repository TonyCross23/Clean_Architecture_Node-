"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const httpErrors_1 = require("../errors/httpErrors");
const errorHandler = (err, req, res, next) => {
    if (err instanceof httpErrors_1.AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    // Fallback for unknown errors
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
