const medellinTaxis = require('../../medellin/taxis')
const info = require('./info')

module.exports = {
  info,
  name: medellinTaxis.name,
  pyp: medellinTaxis.pyp,
}
