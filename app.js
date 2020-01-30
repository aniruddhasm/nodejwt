const express = require('express')
const app = express()
const port = 3000
const routeHandler = require('./routes')
const router = routeHandler()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
require('dotenv').config({ path: './env/.env' })

app.use(bodyParser.urlencoded({ extended: false }))
  .use(logger('dev'))
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())

app.use(myConnection(mysql, {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: process.env.DB_DATABASE
}, 'single'))

app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
