import cartagena from "../cartagena";

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe("Specific cases", () => {
  const dateCases = [
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        taxis: "9-0",
        particulares: "3-4"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        taxis: "1-2",
        particulares: "7-8"
      }
    },
    {
      date: "2018-06-14", // jueves 14 de junio de 2018
      pypCases: {
        taxis: "1-2",
        particulares: "1-2"
      }
    },
    {
      date: "2018-02-01", // jueves 1 de febrero
      pypCases: {
        taxis: "1-2",
        particulares: "7-8"
      }
    },
    {
      date: "2018-02-02", // viernes 2 de febrero
      pypCases: {
        taxis: "3-4",
        particulares: "9-0"
      }
    },
    {
      date: "2018-02-05", // lunes 5 de febrero
      pypCases: {
        taxis: "3-4",
        particulares: "1-2"
      }
    },
    {
      date: "2018-03-02", // viernes 2 de marzo
      pypCases: {
        taxis: "1-2",
        particulares: "9-0"
      }
    },
    {
      date: "2018-03-05", // lunes 5 de marzo
      pypCases: {
        taxis: "1-2",
        particulares: "3-4"
      }
    },
    {
      date: "2018-04-30", // lunes 30 de abril
      pypCases: {
        taxis: "7-8",
        particulares: "3-4"
      }
    },
    {
      date: "2018-06-01", // viernes 1 de junio
      pypCases: {
        taxis: "5-6",
        particulares: "1-2"
      }
    },
    {
      date: "2018-10-01", // lunes 1 de octubre
      pypCases: {
        taxis: "7-8",
        particulares: "7-8"
      }
    },
    {
      date: "2018-10-02", // martes 2 de octubre
      pypCases: {
        taxis: "9-0",
        particulares: "9-0"
      }
    },
    {
      date: "2018-04-04", // miércoles 2 de abril
      pypCases: {
        taxis: "3-4",
        particulares: "7-8"
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
          const result = cartagena.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
