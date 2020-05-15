const mongoose = require('mongoose');
const { UserSchema } = require('./User');

const Schema = mongoose.Schema;

const ProjectSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    theme: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      // required: true,
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
    imageUrl: {
      type: String,
      required: true,
    },
    coord: { type: Schema.Types.ObjectId, ref: 'User' },
    images: [String],
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

const Project = mongoose.model('Project', ProjectSchema);

module.exports = {
  Project,
  ProjectSchema,
};
