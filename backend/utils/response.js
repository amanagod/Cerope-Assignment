class ResponseClass {
  constructor({
    status = 200,
    data = null,
    message = "",
    errors = false,
    success = true,
  } = {}) {
    this.status = status;
    this.data = data;
    this.message = message;
    this.errors = errors;
    this.success = success;
    this.version = undefined; // optional property
  }
}

function responseHandler(res, responseData = {}) {
  const response = new ResponseClass(responseData);
  return res.status(response.status).json(response);
}

function errResponseHandler(res, error) {
  return responseHandler(res, {
    message: error instanceof Error ? error.message : "Internal Server Error",
    status: error?.statusCode || 500,
    data: error?.data || null,
    success: false,
    errors: true,
  });
}

export { responseHandler, errResponseHandler, ResponseClass };
