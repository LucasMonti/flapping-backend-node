import {Request, Response} from "express";
import {loginApp, signUpApp} from "../application/auth";
import {errorResponse, successResponse} from "../utils/response";

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await signUpApp(req.body);
    const message = user && `El usuario ${user.email} ha sido creado con éxito`;
    successResponse(res, user, 200, message);
  } catch (err: any) {
    errorResponse(res, err, 400);
  }
};


export const login = async (req: Request, res: Response) => {
    try {
      const user = await loginApp(req.body);
  
      if (!user) {
        throw new Error('User not found');
      }
      console.log(user);
      const message = `Usuario ${user.email} logged`;
      successResponse(res, user.email, 200, message);
    } catch (err: any) {
      if (err.message === 'User not found') {
        errorResponse(res, err, 404);
      } 
      if (err.message === 'Incorrect password') {
        errorResponse(res, err, 401);
      }
      // else {
      //   errorResponse(res, err, 500);
      // }
    }
  };
