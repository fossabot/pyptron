const { generateMap } = require('../helpers/pyp-helpers')
const { createResponse } = require('../helpers/global-helpers')
const cities = require('../models')

module.exports = {
  getCitiesMap,
}

function getCitiesMap() {
  return createResponse(200, generateMap(cities))
}
