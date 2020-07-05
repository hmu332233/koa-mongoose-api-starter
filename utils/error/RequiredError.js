const ExtendableError = require('./ExtendableError');

class RequiredError extends ExtendableError {
  constructor(parameterName, statusCode = 400) {
    const message = `${parameterName} is required!`;
    super(message);
    this.statusCode = statusCode;
    this.code = '1001';
  }
}

module.exports = RequiredError;
