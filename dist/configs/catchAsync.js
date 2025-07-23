"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const catchAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next);
exports.catchAsync = catchAsync;
