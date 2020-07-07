const { db, CONSTANTS } = require('./db');

exports.CONSTANTS = CONSTANTS;
exports.db = db;

exports.find = (...params) => db.find(...params).lean().exec(); // prettier-ignore
exports.findOne = (...params) => db.findOne(...params).lean().exec(); // prettier-ignore
