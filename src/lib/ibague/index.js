const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Ibagué',
  categories: {
    particulares,
    taxis,
    tpc,
  },
}
