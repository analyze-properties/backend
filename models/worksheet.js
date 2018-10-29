const _ = require('lodash')
const faker = require('faker')

function generateWorksheet() {
  return {
    id: _.uniqueId(),
  }
}

const WORKSHEETS = _.times(20, generateWorksheet)

async function list() {
  return WORKSHEETS
}

async function get(id) {
  return _.find(WORKSHEETS, {id})
}

module.exports = {get, list}
