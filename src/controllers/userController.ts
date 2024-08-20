import {Request, Response} from "express";
import User from "../models/userModel";
import {findAllUsersApp} from "../application/users";
import {errorResponse, successResponse} from "../utils/response";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsersApp()
    const message = 'Success';
    successResponse(res, users, 200, message)
  } catch (err: any) {
    res.status(500).json({error: err.message});
  }
};


