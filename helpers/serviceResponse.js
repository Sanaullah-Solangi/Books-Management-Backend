const serviceResponse = (status, error, data, msg) => {
  const obj = {
    error,
    status,
    data,
    msg,
  };
  return obj;
};

export default serviceResponse;
