import jwt from "jsonwebtoken";

const generateToken = (payload) =>
  jwt.sign({ ...payload }, process.env.AUTH_SECRET);

const verifyToken = (token) => jwt.verify(token, process.env.AUTH_SECRET);

export { generateToken, verifyToken };
