const { RequiredError } = require('./error');

exports.isRequired = (parameterName) => {
  throw new RequiredError(parameterName);
};
