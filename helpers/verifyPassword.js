import bcrypt from "bcrypt";

const verifyPassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

export default verifyPassword;
