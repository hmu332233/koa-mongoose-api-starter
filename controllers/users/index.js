const serUsers = require(`${global.__path}/services/users`);

exports.getList = async (ctx, next) => {
  const users = await serUsers.getList();
  ctx.body = users;
};
