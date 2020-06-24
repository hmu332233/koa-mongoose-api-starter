const router = require('@koa/router')();
const controller = require(`${global.__path}/controllers`);

router.get('/', controller.users.getList);

module.exports = router;
