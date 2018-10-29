const _ = require('lodash')
const faker = require('faker')

function generateUser() {
  return {
    id: _.uniqueId(),
  }
}

const USERS = _.times(20, generateUser)

async function list() {
  return USERS
}

async function get(id) {
  return _.find(USERS, {id})
}

module.exports = {get, list}
