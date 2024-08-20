import {IUser} from "../interfaces/user.iterface";
import User from "../models/userModel";
import bcrypt from "bcrypt";

export const signUpApp = async (body: IUser) => {
  try {
    const saltRounds = 10;
    let {userName, email, password} = body;
    password = await bcrypt.hash(password, saltRounds);
    const user = await User.create({userName, email, password});
    return user;
  } catch (err: any) {
    throw err;
  }
};

export const loginApp = async (body: IUser) => {
  try {
    let {email, password} = body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Verifica la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Si la contraseña no es válida, lanza un error con código 401
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }
    return user
  } catch (err: any) {
    throw err;
  }
};
