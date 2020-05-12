const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    createdAt: Date,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

UserSchema.methods.isCorrectPassword = (password, callback) => {
  bcrypt.compare(password, this.password, (err, same) => {
    return err ? callback(err) : callback(err, same);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
