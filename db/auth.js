import UserModel from "../models/userModel.js";

export const createUser = async (payload) =>
  UserModel.create({ ...payload }).then((user) =>
    user ? user.toObject() : null
  );
