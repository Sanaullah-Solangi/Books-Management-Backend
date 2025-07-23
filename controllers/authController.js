import sendResponse from "../helpers/sendResponse.js";
import { loginService, registerService } from "../services/authServices.js";

// register
const registerUserController = async (req, res, next) => {
  try {
    const result = await registerService(req.body);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Register Controller =>", error);
    next(error);
  }
};

// login
const loginUserController = async (req, res, next) => {
  try {
    const result = await loginService(req.body);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Login Controller =>", error);
    next(error);
  }
};

export { registerUserController, loginUserController };
