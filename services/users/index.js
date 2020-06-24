const modUsers = require(`${global.__path}/models/users`);

exports.getList = async () => {
  const users = await modUsers.find({});
  return users;
};
