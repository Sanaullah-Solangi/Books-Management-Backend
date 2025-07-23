import sendResponse from "../helpers/sendResponse.js";

const getMyInfoController = async (req, res, next) => {
  try {
    delete req.user.password;
    sendResponse(res, {
      status: 200,
      error: false,
      data: req.user,
      msg: "My Info fetch successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getMyInfoController };
