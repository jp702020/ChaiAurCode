class ApiError extends Error {
  constructor(
    statusCode,
    massage = "Somthing  went wrong",
    errors = [],
    stack = ""
  ) {
    super(massage);
    this.statusCode = statusCode;
    this.data = null;
    this.massage = massage;
    this.succsse = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
