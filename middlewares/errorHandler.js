import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  const status =
    err instanceof mongoose.Error.ValidationError
      ? 422
      : err?.statusCode
        ? err.statusCode
        : 500;

  res.status(status).json({
    status: status,
    type: err?.name || "Error",
    success: false,
    message: err?.message || "Something went wrong!",
  });
};

export default errorHandler;
