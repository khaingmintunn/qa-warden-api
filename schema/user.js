const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  career: {
    type: String,
    required: true,
  },
  diamond_count: {
    type: Number,
    required: true,
  },
  auth_status: {
    type: Number,
    required: true,
  },
  user_status: {
    type: Number,
    required: true,
  },
  suspend_status: {
    type: Number,
    required: true,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
})

module.exports = mongoose.model('User', UserSchema)
