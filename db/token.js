import TokenModel from "../models/tokenModel.js";

export const saveToken = async (payload) => await TokenModel.create(payload);

export const findToken = async (otp) => await TokenModel.findOne({ otp });

export const deleteToken = async (code) => await TokenModel.deleteOne({ code });
