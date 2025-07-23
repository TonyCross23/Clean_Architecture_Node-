import { User } from "../../entities/auth.entity";

export interface IAuthRepository { 
    login(email: string, password: string): Promise<User>;
    register(data: User): Promise<User>;
    logout(token: string): Promise<void>;
    refreshToken(token: string): Promise<string>;
    findUserByEmail(email: string): Promise<User>;
    findUserById(id: string): Promise<User>;
}