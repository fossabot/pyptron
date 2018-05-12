const laestrella = require("../laestrella");

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe("Specific cases", () => {
  const dateCases = [
    {
      date: "2018-01-01", // Año Nuevo
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-03-19", // lunes festivo: San José
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-04-07", // sábado 7 de abril de 2018
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-02-04", // domingo 4 de febrero de 2018
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        particulares: "4-5-6-7",
        motos: "8-9",
        taxis: "7"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "2-3-4-5",
        motos: "2-3",
        taxis: "3"
      }
    },
    {
      date: "2018-02-01",
      pypCases: {
        taxis: "3"
      }
    },
    {
      date: "2018-02-06",
      pypCases: {
        taxis: "0"
      }
    },
    {
      date: "2018-03-01",
      pypCases: {
        taxis: "7"
      }
    },
    {
      date: "2018-03-14",
      pypCases: {
        taxis: "5"
      }
    },
    {
      date: "2018-04-06",
      pypCases: {
        taxis: "1"
      }
    },
    {
      date: "2018-04-30",
      pypCases: {
        taxis: "2"
      }
    },
    {
      date: "2018-05-02",
      pypCases: {
        taxis: "9"
      }
    },
    {
      date: "2018-05-08",
      pypCases: {
        taxis: "2"
      }
    },
    {
      date: "2018-05-09",
      pypCases: {
        taxis: "8"
      }
    },
    {
      date: "2018-05-10",
      pypCases: {
        taxis: "4"
      }
    },
    {
      date: "2018-05-31",
      pypCases: {
        taxis: "9"
      }
    },
    {
      date: "2018-06-28",
      pypCases: {
        taxis: "3"
      }
    },
    {
      date: "2018-07-04",
      pypCases: {
        taxis: "6"
      }
    },
    {
      date: "2018-07-30",
      pypCases: {
        taxis: "4"
      }
    },
    {
      date: "2018-08-03",
      pypCases: {
        taxis: "8"
      }
    },
    {
      date: "2018-08-29",
      pypCases: {
        taxis: "5"
      }
    },
    {
      date: "2018-09-04",
      pypCases: {
        taxis: "3"
      }
    },
    {
      date: "2018-09-20",
      pypCases: {
        taxis: "0"
      }
    },
    {
      date: "2018-09-28",
      pypCases: {
        taxis: "6"
      }
    },
    {
      date: "2018-10-03",
      pypCases: {
        taxis: "3"
      }
    },
    {
      date: "2018-10-05",
      pypCases: {
        taxis: "0"
      }
    },
    {
      date: "2018-10-29",
      pypCases: {
        taxis: "1"
      }
    },
    {
      date: "2018-10-30",
      pypCases: {
        taxis: "7"
      }
    },
    {
      date: "2018-11-01",
      pypCases: {
        taxis: "9"
      }
    },
    {
      date: "2018-11-09",
      pypCases: {
        taxis: "4"
      }
    },
    {
      date: "2018-11-27",
      pypCases: {
        taxis: "1"
      }
    },
    {
      date: "2018-12-03",
      pypCases: {
        taxis: "4"
      }
    },
    {
      date: "2018-12-06",
      pypCases: {
        taxis: "2"
      }
    },
    {
      date: "2018-12-10",
      pypCases: {
        taxis: "9"
      }
    },
    {
      date: "2018-12-11",
      pypCases: {
        taxis: "0"
      }
    },
    {
      date: "2018-12-12",
      pypCases: {
        taxis: "1"
      }
    },
    {
      date: "2018-12-13",
      pypCases: {
        taxis: "7"
      }
    },
    {
      date: "2018-12-11",
      pypCases: {
        taxis: "0"
      }
    },
    {
      date: "2018-12-19",
      pypCases: {
        taxis: "6"
      }
    },
    {
      date: "2018-12-28",
      pypCases: {
        taxis: "3"
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
          const result = laestrella.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
