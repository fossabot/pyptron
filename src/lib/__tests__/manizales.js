import manizales from "../manizales";

describe("Specific cases", () => {
  const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];
  const dateCases = [
    {
      date: "2018-01-01", // Año Nuevo
      pypCases: {
        tpc: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-01-06", // Sábado
      pypCases: {
        tpc: "A",
        taxis: "3"
      }
    },
    {
      date: "2018-01-13", // Sábado
      pypCases: {
        tpc: "G",
        taxis: "NA"
      }
    },
    {
      date: "2018-03-19", // lunes festivo: San José
      pypCases: {
        tpc: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-04-07", // sábado 7 de abril de 2018
      pypCases: {
        tpc: "B",
        taxis: "0"
      }
    },
    {
      date: "2018-02-04", // domingo 4 de febrero de 2018
      pypCases: {
        tpc: "NA",
        taxis: "2"
      }
    },
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        tpc: "C",
        taxis: "1-2"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        tpc: "F",
        taxis: "5-6"
      }
    },
    {
      date: "2018-06-14", // jueves 14 de junio de 2018
      pypCases: {
        tpc: "B",
        taxis: "5-6"
      }
    },
    {
      date: "2018-06-09", // sábado 9 de junio
      pypCases: {
        taxis: "8",
        tpc: "H"
      }
    },
    {
      date: "2018-12-29", // sábado 29 de diciembre
      pypCases: {
        taxis: "5",
        tpc: "G"
      }
    },
    {
      date: "2018-12-30", // domingo 30 de diciembre
      pypCases: {
        taxis: "6",
        tpc: "NA"
      }
    },
    {
      date: "2018-01-07", // domingo 7 de enero
      pypCases: {
        taxis: "4",
        tpc: "NA"
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
          const result = manizales.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
