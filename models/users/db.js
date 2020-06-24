const mongoose = require('mongoose');

const CONSTANTS = {};

const schema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  CONSTANTS,
  db: mongoose.model('user', schema),
};
