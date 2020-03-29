'use strict'

const Schema = require('../schema')

class UserModel {
  constructor(params = {}) {
    // super()

    this.user_id = params.user_id
    this.name = params.name
    this.email = params.email
    this.password = params.password
    this.gender = params.gender
    this.age = params.age
    this.education = params.education
    this.career = params.career
    this.auth_status = params.auth_status
    this.user_status = params.user_status
    this.suspend_status = params.suspend_status
    this.diamond_count = params.diamond_count
    this.created_at = params.created_at
    this.updated_at = params.updated_at
  }
  static async getByEmail(email) {
    const user = await Schema.User.findOne({ email })

    return this.toModel(user)
  }

  static toModel(params) {
    if (!params) return null

    const user = {
      user_id: params.user_id !== undefined ? params.user_id : null,
      name: params.name !== undefined ? params.name : null,
      email: params.email !== undefined ? params.email : null,
      password: params.password !== undefined ? params.password : null,
      gender: params.gender !== undefined ? params.gender : null,
      age: params.age !== undefined ? params.age : null,
      education: params.education !== undefined ? params.education : null,
      career: params.career !== undefined ? params.career : null,
      diamond_count:
        params.diamond_count !== undefined ? params.diamond_count : null,
      auth_status: params.auth_status !== undefined ? params.auth_status : null,
      user_status: params.user_status !== undefined ? params.user_status : null,
      suspend_status:
        params.suspend_status !== undefined ? params.suspend_status : null,
      created_at: params.created_at !== undefined ? params.created_at : null,
      updated_at: params.updated_at !== undefined ? params.updated_at : null,
    }

    return new UserModel(user)
  }
}

module.exports.UserModel = UserModel
