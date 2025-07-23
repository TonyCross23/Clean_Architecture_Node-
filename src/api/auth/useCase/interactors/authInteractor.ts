import { inject, injectable } from "inversify";
import { IAuthInterface } from "../interface/IAuthInterface";
import { IAuthRepository } from "../interface/IAuthRepository";
import { INTERFACE_TYPE } from "../../utils/appConst";

@injectable()
export class AuthInteractor implements IAuthInterface {

    constructor (
       @inject(INTERFACE_TYPE.AuthRepository) private repository: IAuthRepository
    ) {
        this.repository = repository;
    }

    login(email: string, password: string) {
        return this.repository.login(email, password);
    }
    register(input: any) {
        return this.repository.register(input);
    }
    logout(token: string) {
        return this.repository.logout(token);
    }
    refreshToken(token: string) {
        return this.repository.refreshToken(token);
    }
    
}