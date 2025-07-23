import UserModel from "../models/userModel.js";

export const getUsers = async () => await UserModel.find();

export const getUserById = async (id) =>
  await UserModel.findOne({ _id: id }).lean();

export const getUserByEmail = async (email) =>
  await UserModel.findOne({ email }).lean();

export const updateUserByEmail = async (email, data) => {
  return await UserModel.findOneAndUpdate(email, data, {
    new: true,
  });
};

export const updateUserById = async (id, data) => {
  return await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export const deleteUserById = async (id) =>
  await UserModel.findByIdAndDelete(id);
