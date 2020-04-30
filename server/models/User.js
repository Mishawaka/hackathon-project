const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    createdAt: Date,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

const user = mongoose.model('User', UserSchema);

module.exports = user;
