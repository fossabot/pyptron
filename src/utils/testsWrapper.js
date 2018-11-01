// Función que se ejecuta para cada uno de los casos de cada una de las
// ciudades, es llamada en cada test de cada ciudad. Esta función sólo se usa
// para ejecutar los tests.
export default (city, dateCases) => {
  Object.keys(city.categories).forEach(category => {
    describe(`Test for ${city.name} info`, () => {
      it(`Should return hours info for ${category}`, () => {
        const { hours } = city.categories[category].info;
        expect(Array.isArray(hours)).toBeTruthy();
        hours.forEach(hour => {
          expect(typeof hour.comment).toBe("string");
          expect(Array.isArray(hour.hours[0])).toBeTruthy();
          hour.hours.forEach(h => {
            expect(h.length === 0 || h.length === 2).toBeTruthy();
          });
        });
      });
    });
  });
  describe(`Test cases for ${city.name}`, () => {
    const times = ["T00:00:00.000-05:00", "T23:59:59.999-05:00"];
    // cada caso para cada fecha. Por ello comenzamos recorriendo cada uno de
    // los objetos que vamos en evaluar para cada uno de los test, tomando como
    // referente la fecha.
    dateCases.forEach(dateCase => {
      // Ahora recorremos cada uno de los casos que hay para cada fecha.
      Object.keys(dateCase.pypCases).forEach(pypCase => {
        // Este es el valor esperado para cada uno caso de los casos que vamos a
        // evaluar.
        const pypNum = dateCase.pypCases[pypCase];
        // Por último, vamos a evaluar cada caso de cada fecha en distintas
        // horas para verificar que da el resultado esperado independiente de la
        // hora para comprobar que no estamos teniendo saltos de fecha por zona
        // horaria.
        it(`should return '${pypNum}' for '${pypCase}' @${
          dateCase.date
        }`, () => {
          times.forEach(time => {
            const pypDate = dateCase.date + time;
            const result = city.categories[pypCase].pyp(pypDate);
            expect(result).toBe(pypNum);
          });
        });
      });
    });
  });
};
