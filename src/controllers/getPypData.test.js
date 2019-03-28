const { getPypData } = require('./getPypData')

describe('Generate pyp data objects', () => {
  it('should return data for three days for all categories', () => {
    const date = '2018-03-06T00:00:02.000-05:00'
    const days = 3
    const result = getPypData({ city: 'bogota', date, days })
    const categories = Object.keys(result.categories)
    expect(categories.length).toBeGreaterThan(0)
    expect(result.name).toBe('Bogotá')
    expect(result.path).toBe('bogota')
    const categoryKeys = [
      'decrees',
      'exceptions',
      'excludedDays',
      'emoji',
      'hours',
      'maps',
      'messages',
      'name',
      'observations',
      'path',
      'pyp',
      'scheme',
      'skipHolidays',
      'vehicleClasses',
    ]
    categories.forEach(category => {
      expect(Object.keys(result.categories[category])).toEqual(
        expect.arrayContaining(categoryKeys)
      )
      const { pyp } = result.categories[category]
      expect(pyp.length).toBe(days)
      pyp.forEach(elem => {
        expect(elem.date).toEqual(
          expect.stringMatching(
            /20\d{2}-[0-1]\d{1}-[0-3]\d{1}T\d{2}:\d{2}:\d{2}.\d{3}Z/
          )
        )
        expect(Array.isArray(elem.numbers)).toBe(true)
      })
    })
  })
  it('should return data for two categories', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const days = 3
    const categories = ['taxis', 'tpc']
    const result = getPypData({ city: 'bogota', date, days, categories })
    expect(Object.keys(result.categories).length).toBe(categories.length)
    expect(result.name).toBe('Bogotá')
    expect(result.categories.taxis.name).toBe('Taxis')
    expect(result.categories.taxis.path).toBe('bogota/taxis')
  })
})
