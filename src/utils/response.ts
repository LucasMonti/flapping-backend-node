import {Response} from "express";
import {ISuccessResponse} from "../interfaces/utils.interface";

export const successResponse = async (
  res: Response,
  data: any,
  message: string
) => {
  const body: ISuccessResponse = {
    status: 200,
    data,
    message,
  };

  return res.json(body);
};

export const errorResponse = async (
  res: Response,
  err: any,
  status: number
) => {
  return res.status(status).json({message: err.message});
};
