import { Container } from "inversify";
import { AuthRepository } from "../repository/AuthRepository";
import { INTERFACE_TYPE } from "../utils/appConst";
import { AuthController } from "../controllers/authController";
import { AuthInteractor } from "../useCase/interactors/authInteractor";
import { IAuthRepository } from "../useCase/interface/IAuthRepository";
import { IAuthInterface } from "../useCase/interface/IAuthInterface";
import { PrismaService } from "../../../libs/prismaService";


const container = new Container()

container.bind<PrismaService>(INTERFACE_TYPE.PrismaService).to(PrismaService).inSingletonScope();
container.bind<IAuthRepository>(INTERFACE_TYPE.AuthRepository).to(AuthRepository)
container.bind<IAuthInterface>(INTERFACE_TYPE.AuthInteractor).to(AuthInteractor)
container.bind<AuthController>(INTERFACE_TYPE.AuthController).to(AuthController)

export default container