import Router from 'express';
import { validate } from '../../../middlewares/validate';
import { registerSchema } from '../validation/auth.validation';
import { AuthController } from '../controllers/authController';
import container from '../config/container';
import { INTERFACE_TYPE } from '../utils/appConst';

const authRouter = Router();

const authController = container.get<AuthController>(INTERFACE_TYPE.AuthController);

authRouter.post("/register", validate(registerSchema), authController.registerUser);

export default authRouter;