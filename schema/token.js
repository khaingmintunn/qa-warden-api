const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema({
  token_id: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expired_at: {
    type: String,
    required: true,
  },
  created_user_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
})

module.exports = mongoose.model('Token', TokenSchema)
