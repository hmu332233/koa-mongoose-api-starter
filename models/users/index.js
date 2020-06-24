const { db, CONSTANTS } = require('./db');

exports.CONSTANTS = CONSTANTS;
exports.db = db;
exports.find = (...params) => db.find(...params).lean();
