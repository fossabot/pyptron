const { getCitiesMap, getCityData } = require('./controllers')

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
      return 'Only God knows what just happened.'
  }
}
