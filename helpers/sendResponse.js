const sendResponse = (res, { status, error, data, msg }) => {
  res.status(status).json({
    error,
    status,
    data,
    msg,
  });
};

export default sendResponse;
