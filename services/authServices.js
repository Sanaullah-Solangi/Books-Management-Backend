import { generateToken } from "../config/jwt.js";
import { createUser } from "../db/auth.js";
import { getUserByEmail } from "../db/user.js";
import hashPassword from "../helpers/hashPassword.js";
import serviceResponse from "../helpers/serviceResponse.js";
import verifyPassword from "../helpers/verifyPassword.js";

// register
const registerService = async (payload) => {
  try {
    let { email, password } = payload;
    const isAlready = await getUserByEmail(email);
    if (isAlready)
      return serviceResponse(409, true, null, "User Already Exist");

    const securePassword = await hashPassword(password);
    payload.password = securePassword;
    let newUser = await createUser(payload);
    delete newUser.password;
    return serviceResponse(201, false, newUser, "User Registered Successfully");
  } catch (error) {
    console.log("ERROR IN REGISTER SERVICE => ", error);
    throw error;
  }
};

// login
const loginService = async (payload) => {
  try {
    const { email, password } = payload;

    const isExistingUser = await getUserByEmail(email);
    if (!isExistingUser)
      return serviceResponse(404, true, null, "User Not Exist");

    const isValidPass = await verifyPassword(password, isExistingUser.password);

    if (!isValidPass)
      return serviceResponse(400, true, null, "Invalid Password");

    const token = generateToken({ ...payload });
    return serviceResponse(
      200,
      false,
      { ...isExistingUser, token },
      "User Logedin Successfully"
    );
  } catch (error) {
    console.log("ERROR IN LOGIN SERVICE => ", error);
    throw error;
  }
};

export { registerService, loginService };
