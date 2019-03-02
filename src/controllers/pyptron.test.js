const { getPyp, getPypData, getPypInfo } = require('./pyptron')

describe('Generate pyp data objects', () => {
  it('should return data for three days for all categories', () => {
    const date = '2018-03-06T00:00:02.000-05:00'
    const days = 3
    const result = getPypData('bogota', date, days)
    expect(result.data.length).toBe(3)
    expect(result.name).toBe('Bogotá')
    expect(result.path).toBe('bogota')
    const categories = Object.keys(result.info)
    expect(categories.length).toBeGreaterThan(0)
    const categoryKeys = [
      'days',
      'decrees',
      'exceptions',
      'hours',
      'maps',
      'observations',
      'scheme',
      'vehicleClasses',
      'name',
      'path',
    ]
    categories.forEach(category => {
      expect(Object.keys(result.info[category])).toEqual(categoryKeys)
    })
    const { data } = result
    expect(data.length).toBe(days)
    data.forEach(elem => {
      expect(elem.date).toEqual(
        expect.stringMatching(
          /20\d{2}-[0-1]\d{1}-[0-3]\d{1}T\d{2}:\d{2}:\d{2}.\d{3}Z/
        )
      )
      elem.categories.forEach(category => {
        expect(category).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            path: expect.stringMatching(/[a-z]+\/[a-z]+/),
            key: expect.stringMatching(/[a-z]+/),
            pyp: expect.stringMatching(/[\d-]+/),
          })
        )
      })
    })
  })
  it('should return data for two categories', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const days = 3
    const categories = ['taxis', 'ambiental']
    const result = getPypData('bogota', date, days, categories)
    expect(result.data.length).toBe(3)
    expect(result.name).toBe('Bogotá')
    expect(result.data[0].categories.length).toBe(categories.length)
    expect(result.data[0].categories[0].name).toBe('Taxis')
    expect(result.data[0].categories[0].path).toBe('bogota/taxis')
    expect(Object.keys(result.info).length).toBe(categories.length)
  })
  it('should return pyp meta-info for all categories', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const result = getPypInfo('bogota', date)
    const categoryKeys = [
      'days',
      'decrees',
      'exceptions',
      'hours',
      'maps',
      'observations',
      'scheme',
      'vehicleClasses',
      'name',
      'path',
    ]
    Object.keys(result).forEach(category => {
      expect(Object.keys(result[category])).toEqual(categoryKeys)
    })
  })
  it('should return pyp data for one date', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const result = getPyp('bogota', date)
    expect(result).toEqual(
      expect.arrayContaining([
        {
          name: expect.any(String),
          path: expect.stringMatching(/[a-z]+\/[a-z]+/),
          key: expect.stringMatching(/[a-z]+/),
          pyp: expect.stringMatching(/[\d-]+/),
        },
      ])
    )
  })
})
