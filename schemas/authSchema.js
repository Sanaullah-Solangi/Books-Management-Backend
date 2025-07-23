import joi from "joi";

const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(3).max(6),
});

const loginSchema = joi.object({
  username: joi.string(),
  email: joi.string().email().required(),
  password: joi.string().required().min(3).max(6),
});

export { registerSchema, loginSchema };
