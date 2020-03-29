const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const Mongodb = require('./utils/mongodb')
const RouteList = require('./route-list')
const routes = require('./service')
const port = process.env.NODE_ENV !== 'local' ? 4000 : 3000
const app = express()

Mongodb.connect() // connect with mongodb

app.use(cors()) // to enable with cross platform
app.use(logger('dev')) // to enable console log
app.use(bodyParser.json()) // request body to json format
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
app.set('etag', false)
app.use('/', routes)

app.listen(port, () => {
  console.log(
    `Q/A warden ${process.env.NODE_ENV} server with port no ${port} is up ...\nRoute List\n===========`
  )
  console.log(RouteList.routes)
})
