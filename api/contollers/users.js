const jwt = require('jsonwebtoken')

const generateToken = (req) => {
  return jwt.sign(
    {
      username: req.data.userName
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

      conn.query(`SELECT * FROM users where email=${req.data.email} and password=${req.data.password};`, (err, result) => {
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
    let resp = {}
    resp.data = {
      token: token
    }
    res.status(200).send(resp)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports.login = login
