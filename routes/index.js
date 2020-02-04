const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

let authorized = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    res.status(400).send({ error: 'Auth token missing.' })
  }
}

module.exports = () => {
  router.post('/login', require('../api/contollers/users').login)
  router.post('/afterlogin', authorized, require('../api/contollers/afterlogin').afterlogin)
  return router
}
