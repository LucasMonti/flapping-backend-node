import { Router } from "express";
import { login, signUp } from '../controllers/authController';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);

export default authRouter;