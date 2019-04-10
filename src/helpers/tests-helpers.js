exports.testInfo = category => {
  describe(`Test info`, () => {
    const { decrees, hours, scheme, vehicleClasses } = category

    it(`Should return an array for 'vehicleClasses'`, () => {
      expect(Array.isArray(vehicleClasses)).toBe(true)
    })
    it(`Should return scheme`, () => {
      expect(typeof scheme).toEqual(expect.anything())
    })
    it(`Should return decrees `, () => {
      expect(Array.isArray(decrees)).toBe(true)
      decrees.forEach(decree => {
        expect(typeof decree.name).toBe('string')
        expect(typeof decree.url).toBe('string')
      })
    })
    it(`Should return hours`, () => {
      expect(Array.isArray(hours)).toBe(true)
      hours.forEach(hour => {
        expect(typeof hour.comment).toBe('string')
        expect(Array.isArray(hour.days)).toBe(true)
        expect(Array.isArray(hour.hours[0])).toBe(true)
        hour.hours.forEach(h => {
          expect(h.length === 0 || h.length === 2).toBe(true)
        })
      })
    })
  })
}

exports.testCases = (category, dateCases) => {
  describe(`Test cases`, () => {
    const times = ['T00:00:00.000-05:00', 'T23:59:59.999-05:00']
    dateCases.forEach(dateCase => {
      const pypNum = dateCase.pyp
      times.forEach(time => {
        const pypDate = `${dateCase.date}${time}`
        it(`should return '${JSON.stringify(pypNum)}' @${pypDate}`, () => {
          expect(category.getPypNumbers(pypDate)).toEqual(pypNum)
        })
      })
    })
  })
}
