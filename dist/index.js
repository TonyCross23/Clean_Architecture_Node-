"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const log_1 = __importDefault(require("./logger/log"));
const router_1 = __importDefault(require("./router"));
const appError_1 = require("./middlewares/appError");
const PORT = process.env.PORT || 6000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev", {
    stream: {
        write: (message) => log_1.default.info(message.trim())
    }
}));
app.use("/api/v1", router_1.default);
app.use(appError_1.errorHandler);
app.listen(PORT, () => {
    log_1.default.info(`🚀 http://localhost:${PORT} \n` +
        `If you want to stop the server, press Ctrl + C`);
});
