const { getCities, getCategories } = require('./controllers')
const { createResponse } = require('./helpers/global-helpers')

exports.pyptron = async event => {
  const { city, category } = event.pathParameters || {}
  const options = event.queryStringParameters || {}
  switch (event.resource) {
    case '/':
      return getCities()
    case '/{city}':
      return getCities(city, options)
    case '/{city}/{category}':
      return getCategories(city, category, options)
    default:
      return createResponse(500, {
        error: 'Only God knows what just happened.',
      })
  }
}
