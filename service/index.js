const express = require('express')
const router = express.Router()
const UserModel = require('./user').UserModel

router.use('/login', async (req, res, next) => {
  console.log('Request\n=============\n', req.body, '\n=============')
  const user = await UserModel.login(req, res, next)
  if (user) res.status(200).send({ user })
  console.log('Result\n=============\n', user, '\n=============')
})

module.exports = router
