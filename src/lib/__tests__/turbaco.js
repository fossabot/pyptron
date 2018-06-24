import turbaco from "../turbaco";

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe(`Test cases for ${turbaco.name}`, () => {
  const dateCases = [
    {
      date: "2018-01-01", // Año Nuevo
      pypCases: {
        motos: "NA"
      }
    },
    {
      date: "2018-03-19", // lunes festivo: San José
      pypCases: {
        motos: "NA"
      }
    },
    {
      date: "2018-04-07", // sábado 7 de abril de 2018
      pypCases: {
        motos: "NA"
      }
    },
    {
      date: "2018-02-04", // domingo 4 de febrero de 2018
      pypCases: {
        motos: "NA"
      }
    },
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        motos: "1-3-5-7-9"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        motos: "0-2-4-5-8"
      }
    }
  ];
  // Los tests son un array de objetos que contienen la fecha que se va a evaluar y un objecto con
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
      it(`should return '${pypNum}' for '${pypCase}' @${dateCase.date}`, () => {
        times.forEach(time => {
          const pypDate = dateCase.date + time;
          const result = turbaco.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});