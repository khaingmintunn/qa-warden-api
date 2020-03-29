const Model = require('../model')

class UserModel {
  static async login(req, res, next) {
    try {
      const user = await Model.User.getByEmail(req.body.email)
      console.log(user)
      if(!user) {
        res.status(404).send({ message: 'User not found.' })
      }
      return user;
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'An error occured during login process' })
    }
  }
}

module.exports.UserModel = UserModel
