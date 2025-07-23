"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const httpErrors_1 = require("../../../errors/httpErrors");
const httpStatusCodes_1 = require("../../../configs/httpStatusCodes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const inversify_1 = require("inversify");
const appConst_1 = require("../utils/appConst");
let AuthRepository = class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
        this.prisma = prisma;
    }
    login(email, password) {
        throw new Error("Method not implemented.");
    }
    async register(data) {
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
        if (existingUser) {
            throw new httpErrors_1.AppError(httpStatusCodes_1.HTTP_STATUS.CONFLICT, "User already exists with this email");
        }
        const hashedPassword = bcrypt_1.default.hashSync(data.password, 12);
        const user = await this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: hashedPassword,
            }
        });
        const { password, ...safeUser } = user;
        return safeUser;
    }
    logout(token) {
        throw new Error("Method not implemented.");
    }
    refreshToken(token) {
        throw new Error("Method not implemented.");
    }
    findUserByEmail(email) {
        throw new Error("Method not implemented.");
    }
    findUserById(id) {
        throw new Error("Method not implemented.");
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(appConst_1.INTERFACE_TYPE.PrismaService))
], AuthRepository);
