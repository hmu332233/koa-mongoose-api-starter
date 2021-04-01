---
to: utils/error/<%= name %>.js
---
const ExtendableError = require('./ExtendableError');

class <%= name %> extends ExtendableError {
  constructor({ message, statusCode = 500, ...params }) {
    super(message);
    this.statusCode = statusCode;
    this.meta = params;
  }
}

module.exports = <%= name %>;