import { IUser } from "../interfaces/user.iterface";
import User from "../models/userModel";

export const createUserApp = async (body: IUser) => {
  try {
    const {name, email, password} = body;
    const user = await User.create({name, email, password});
    return user;
  } catch (err: any) {
    throw err;
  }
};
