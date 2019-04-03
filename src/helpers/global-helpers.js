const slugify = require('slugify')
const config = require('../config')

module.exports = {
  buildAssetPath,
  cdnPathMaker,
  createResponse,
  licensePlateScheme: {
    lastNumber: 0,
    firstNumber: 1,
  },
}

function createResponse(statusCode, body) {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(body),
  }
}

function buildAssetPath(city, asset) {
  return `${config.cdn}/${city}/${asset}`
}

function cdnPathMaker(array, cityPath) {
  return array.map(object => {
    const slug = buildAssetPath(cityPath, slugify(object.name, { lower: true }))
    const objectExtension = object.url.split(':')[1]
    // eslint-disable-next-line no-param-reassign
    object.url = object.url.startsWith('cdn:')
      ? `${slug}.${objectExtension}`
      : object.url
    return object
  })
}
