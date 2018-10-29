const User = require('../models/user')

async function get(req, res, next) {
  res.send(await User.get(req.params.id))
}

async function list(req, res, next) {
  res.send(await User.list())
}

module.exports = {get, list}
