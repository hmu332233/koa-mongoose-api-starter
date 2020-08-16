global.__path = __dirname;

const Config = require('config');
const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('@koa/router')();
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');

const logger = require(`${global.__path}/utils/logger`);

const app = (module.exports = new Koa());
app.use(cors());
app.use(bodyParser());

mongoose.Promise = global.Promise;
mongoose.connect(Config.db.mongodb.url, Config.db.mongodb.opts);
mongoose.set('debug', Config.db.mongodb.debug);

// error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message,
      code: err.code,
    };

    logger.error(err);
  }
});

router.use('/api', require('./routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

if (!module.parent) {
  const port = Config.server.port;
  app.listen(port, () => {
    console.log('listening to port', port);
  });
}
