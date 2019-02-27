const { cities, categories } = require('./controllers')
const { createResponse } = require('./helpers/globalHelpers')

exports.pyptron = async event => {
  const { city, category } = event.pathParameters || {}
  const options = event.queryStringParameters || {}
  switch (event.resource) {
    case '/':
      return cities()
    case '/{city}':
      return cities(city, options)
    case '/{city}/{category}':
      return categories(city, category, options)
    default:
      return createResponse(500, {
        error: 'We do not know what just happened.',
      })
  }
}
