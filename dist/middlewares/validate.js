"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            errors: result.error.issues.map((err) => ({
                path: err.path.join('.'),
                message: err.message,
            })),
        });
    }
    // Attach parsed data if needed
    req.body = result.data;
    next();
};
exports.validate = validate;
