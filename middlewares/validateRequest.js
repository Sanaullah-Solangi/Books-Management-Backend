import createResObj from "../helpers/serviceResponse.js";
import sendResponse from "../helpers/sendResponse.js";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
const { BAD_REQUEST } = StatusCodes;

const validateRequest = (req, res, next) => {
  let errors = {};
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    validationErrors.errors.forEach((err) => {
      if (!errors[err.path]) {
        errors[err.path] = err.msg;
      } else {
        if (!Array.isArray(errors[err.path])) {
          errors[err.path] = [errors[err.path]];
        }
        errors[err.path].push(err.msg);
      }
    });
    const resObj = createResObj(BAD_REQUEST, false, null, errors);
    return sendResponse(res, resObj);
  } else {
    next();
  }
};

export default validateRequest;
