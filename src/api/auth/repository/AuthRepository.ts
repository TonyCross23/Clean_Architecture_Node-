import { PrismaClient } from "@prisma/client";
import { User } from "../entities/auth.entity";
import { IAuthRepository } from "../useCase/interface/IAuthRepository";
import { AppError } from "../../../errors/httpErrors";
import { HTTP_STATUS } from "../../../configs/httpStatusCodes";
import bcrypt from "bcrypt";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils/appConst";

@injectable()
export class AuthRepository implements IAuthRepository {

    constructor (
       @inject(INTERFACE_TYPE.PrismaService) private prisma: PrismaClient
    ) {
        this.prisma = prisma;
    }

    login(email: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async register(data: User): Promise<User> {
        
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
        if (existingUser) {
            throw new AppError(HTTP_STATUS.CONFLICT, "User already exists with this email");
        }

        const hashedPassword = bcrypt.hashSync(data.password, 12);

        const user = await this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: hashedPassword,
            }
        })

        const { password, ...safeUser } = user;

        return safeUser as User;

    }
    logout(token: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    refreshToken(token: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    findUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}