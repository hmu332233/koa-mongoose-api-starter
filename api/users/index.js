const router = require('@koa/router')();
const usersCtrl = require('./users.ctrl');

router.get('/', usersCtrl.getList);

module.exports = router;
