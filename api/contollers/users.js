const jwt = require('jsonwebtoken')

const generateToken = (req) => {
  return jwt.sign(
    {
      email: req.body.email
    },
    process.env.SECRET,
    {
      expiresIn: process.env.SESSION_EXPIRY_TIME
    }
  )
}

const fetchData = (req) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err, conn) => {
      if (err) {
        reject(err)
      }

      conn.query(`SELECT * FROM users where email='${req.body.email}' and password='${req.body.password}';`, (err, result) => {
        if (err) {
          reject(err)
        }
        if (result.length > 0) {
          resolve(result)
        } else {
          reject('invalid credentials')
        }
      })
    })
  })
}

const login = async (req, res) => {
  try {
    let result = await fetchData(req)
    let token = await generateToken(req)
    let response = {
      token: token
    }
    res.status(201).send(response)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.login = login
