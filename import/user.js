const fs = require('fs')
const Schema = require('../schema')
const filePath = './import/database/users.json'
const json = fs.readFileSync(filePath)
const rawItems = JSON.parse(json)
const Model = require('../model')

class UserImport {
  static async main() {
    let count = 0
    await Promise.all(
      rawItems.map(async item => {
        let res = await this.saveToMongodb(item)
        if (res) count++
      })
    )
    let msg =
      count < 2 ? `${count} user is inserted.` : `${count} users are inserted.`
    console.log(msg)
  }

  static async saveToMongodb(item) {
    const dbUser = await Model.User.getByEmail(item.email)
    if (!dbUser) {
      const userItems = this.formatUser(item)
      const user = new Schema.User(userItems)
      await user.save()
      console.log(user)
      return true
    } else {
      return false
    }
  }

  static formatUser(item) {
    return {
      user_id: item.user_id,
      name: item.name,
      email: item.email,
      password: item.password,
      gender: item.gender,
      age: item.age,
      education: item.education,
      career: item.career,
      auth_status: item.auth_status,
      user_status: item.user_status,
      suspend_status: item.suspend_status,
      diamond_count: item.diamond_count,
      created_at: item.created_at,
      updated_at: item.updated_at,
    }
  }
}

module.exports.UserImport = UserImport
