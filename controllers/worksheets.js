const Worksheet = require('../models/worksheet')

async function get(req, res, next) {
  res.send(await Worksheet.get(req.params.id))
}

async function list(req, res, next) {
  res.send(await Worksheet.list())
}

module.exports = {get, list}
