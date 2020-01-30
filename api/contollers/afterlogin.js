const afterlogin = async (req, res) => {
  try {
    res.status(200).send('Hello world')
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports.afterlogin = afterlogin
