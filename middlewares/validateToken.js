import { StatusCodes } from "http-status-codes";
import verifyPassword from "../helpers/verifyPassword";
import { getUserById } from "../db/user";
const { BAD_REQUEST, UNAUTHORIZED } = StatusCodes;
const validateToken = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const bearerToken = req?.headers?.authorization;
      if (!bearerToken) {
        return sendResponse(
          res,
          BAD_REQUEST,
          false,
          null,
          "Token Not Provided"
        );
      }

      const token = bearerToken.split(" ")[1];
      const decodedToken = verifyPassword(token);
      if (!decodedToken) {
        return sendResponse(res, UNAUTHORIZED, false, null, "Unathorized User");
      }

      const user = await getUserById(decodedToken?._id);
      if (!user)
        return sendResponse(res, NOT_FOUND, false, null, "User Not Found");

      if (!allowedRoles.includes(user.role)) {
        return sendResponse(res, BAD_REQUEST, false, null, "Access Denied!");
      }
      req.user = user;
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.log("Error In ValidateToken Middleware =>", error);
      next(error);
    }
  };
};

export default validateToken;
