const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const customerController = require('../api/contollers/customer')

let authorized = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        next('Unauthorized access!')
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    next('Auth token missing.')
  }
}

module.exports = () => {
  router.get('/', customerController.list)
  router.post('/add', customerController.save)
  router.get('/update/:id', customerController.edit)
  router.post('/update/:id', customerController.update)
  router.get('/delete/:id', customerController.delete)

  router.post('/login', require('../api/contollers/users').login)
  router.post('/afterlogin', authorized, require('../api/contollers/afterlogin').afterlogin)
  return router
}
