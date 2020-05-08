const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    org: {
      type: String,
      required: true,
    },
    city: {
        type: String,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    facebook: String,
    inst: String,
    createdAt: Date,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
