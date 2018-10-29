const Property = require('../models/property')

async function get(req, res, next) {
  res.send(await Property.get(req.params.id))
}

async function list(req, res, next) {
  res.send(await Property.list())
}

module.exports = {get, list}
