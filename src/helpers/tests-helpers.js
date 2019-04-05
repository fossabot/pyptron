const Category = require('../classes/category')

exports.testInfo = category => {
  describe(`Test for ${category.name} info`, () => {
    const {
      key,
      name,
      emoji,
      decrees,
      hours,
      scheme,
      vehicleClasses,
    } = category
    it(`Should return a key for ${category.name}`, () => {
      expect(
        Object.values(Category.getCategoryMetainfo())
          .map(value => value.key)
          .includes(key)
      ).toBe(true)
    })
    it(`Should return an emoji for ${category.name}`, () => {
      expect(
        Object.values(Category.getCategoryMetainfo())
          .map(value => value.emoji)
          .includes(emoji)
      ).toBe(true)
    })
    it(`Should return a name for ${category.name}`, () => {
      expect(
        Object.values(Category.getCategoryMetainfo())
          .map(value => value.name)
          .includes(name)
      ).toBe(true)
    })

    it(`Should return an array for 'vehicleClasses' of ${
      category.name
    }`, () => {
      expect(Array.isArray(vehicleClasses)).toBe(true)
    })
    it(`Should return scheme info of ${category.name}`, () => {
      expect(typeof scheme).toEqual(expect.anything())
    })
    it(`Should return decrees info for ${category.name}`, () => {
      expect(Array.isArray(decrees)).toBe(true)
      decrees.forEach(decree => {
        expect(typeof decree.name).toBe('string')
        expect(typeof decree.url).toBe('string')
      })
    })
    it(`Should return hours info for ${category}`, () => {
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
  describe(`Test cases for ${category.name}`, () => {
    const times = ['T00:00:00.000-05:00', 'T23:59:59.999-05:00']
    // cada caso para cada fecha. Por ello comenzamos recorriendo cada uno de
    // los objetos que vamos en evaluar para cada uno de los test, tomando como
    // referente la fecha.
    dateCases.forEach(dateCase => {
      // Ahora recorremos cada uno de los casos que hay para cada fecha.
      // Este es el valor esperado para cada uno caso de los casos que vamos a
      // evaluar.
      const pypNum = dateCase.pyp
      // Por último, vamos a evaluar cada caso de cada fecha en distintas
      // horas para verificar que da el resultado esperado independiente de la
      // hora para comprobar que no estamos teniendo saltos de fecha por zona
      // horaria.
      times.forEach(time => {
        const pypDate = `${dateCase.date}${time}`
        it(`should return '${JSON.stringify(pypNum)}' for '${
          category.name
        }' @${pypDate}`, () => {
          expect(category.getPypNums(pypDate)).toEqual(pypNum)
        })
      })
    })
  })
}