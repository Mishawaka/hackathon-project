const mongoose = require('mongoose');
const { ProjectSchema } = require('./Project');

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    descr: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    addr: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    regUrl: {
      type: String,
      required: true,
    },
    project: {
      type: ProjectSchema,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
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
