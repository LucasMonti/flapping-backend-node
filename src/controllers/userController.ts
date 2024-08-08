import {Request, Response} from "express";
import User from "../models/userModel";
import {createUserApp} from "../application/users";
import {errorResponse, successResponse} from "../utils/response";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({error: err.message});
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserApp(req.body);
    const message = user && `El usuario ${user.email} ha sido creado con éxito`;

    successResponse(res, user, message);
  } catch (err: any) {
    errorResponse(res, err, 400);
  }
};
