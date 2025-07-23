import bcrypt from "bcrypt";

const hashPassword = async (pass) => {
  return await bcrypt.hash(pass, 12);
};

export default hashPassword;
