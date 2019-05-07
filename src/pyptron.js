const { getCitiesMap, getCityData } = require('./controllers')
const { createResponse } = require('./helpers/global-helpers')

exports.pyptron = async event => {
  const { city, category } = event.pathParameters || {}
  const options = event.queryStringParameters || {}
  switch (event.resource) {
    case '/':
      return getCitiesMap()
    case '/{city}':
      return getCityData(city, options)
    case '/{city}/{category}':
      return getCityData(city, { category, ...options })
    default:
      return createResponse(500, {
        error: 'Only God knows what just happened.',
      })
  }
}
