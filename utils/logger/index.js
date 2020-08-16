const Config = require('config');
const pino = require('pino');
const logger = pino({
  level: Config.log.console.level,
});

module.exports = logger;
