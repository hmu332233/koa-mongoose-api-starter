const router = require('@koa/router')();
const usersRouter = require('./users');

router.use('/users', usersRouter.routes());

module.exports = router;
