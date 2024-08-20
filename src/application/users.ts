import User from "../models/userModel";

export const findAllUsersApp = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err: any) {
    throw err;
  }
};
