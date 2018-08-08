// Función que se ejecuta para cada uno de los casos de cada una de las ciudades, es llamada en cada test de cada ciudad.
// Esta función sólo se usa para ejecutar los tests.
const testCases = (city, dateCases) => {
  describe(`Test cases for ${city.name}`, () => {
    const times = ["T00:00:00.000-05:00", "T23:59:59.999-05:00"];
    // cada caso para cada fecha. Por ello comenzamos recorriendo cada uno de los objetos que vamos en
    // evaluar para cada uno de los test, tomando como referente la fecha.
    dateCases.forEach(dateCase => {
      // Ahora recorremos cada uno de los casos que hay para cada fecha.
      Object.keys(dateCase.pypCases).forEach(pypCase => {
        // Este es el valor esperado para cada uno caso de los casos que vamos a evaluar.
        const pypNum = dateCase.pypCases[pypCase];
        // Por último, vamos a evaluar cada caso de cada fecha en distintas horas para verificar que
        // da el resultado esperado independiente de la hora para comprobar que no estamos teniendo
        // saltos de fecha por zona horaria.
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

export default testCases;