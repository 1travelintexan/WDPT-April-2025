const User = require("../models/User.model.js")

module.exports = async function attachUser(req, res, next) {
  try {
    const user = await User.findById(req.headers.payload)
    delete user._doc.password
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
