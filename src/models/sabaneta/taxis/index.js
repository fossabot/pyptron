const medellinTaxis = require('../../medellin/taxis')
const info = require('./info')

module.exports = {
  name: medellinTaxis.name,
  info,
  pyp: medellinTaxis.pyp,
}
