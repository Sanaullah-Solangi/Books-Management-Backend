import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import { getUserById } from "../db/user.js";
import sendResponse from "../helpers/sendResponse.js";
import { verifyToken } from "../config/jwt.js";
const { BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } = StatusCodes;
const validateToken = async (req, res, next) => {
  try {
    const bearerToken = req?.headers?.authorization;
    if (!bearerToken) {
      return sendResponse(res, {
        status: BAD_REQUEST,
        error: false,
        data: null,
        msg: "Token Not Provided",
      });
    }

    const token = bearerToken.split(" ")[1];
    const decodedToken = verifyToken(token);
    console.log(Boolean(decodedToken));
    if (!decodedToken) {
      return sendResponse(res, {
        status: UNAUTHORIZED,
        error: false,
        data: null,
        msg: "Unathorized User",
      });
    }

    const user = await getUserById(decodedToken?._id);
    if (!user)
      return sendResponse(res, {
        status: NOT_FOUND,
        error: false,
        data: null,
        msg: "User Not Found",
      });

    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log("Error In ValidateToken Middleware =>", error);
    next(error);
  }
};

export default validateToken;
