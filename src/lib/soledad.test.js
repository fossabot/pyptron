const { testCases, testInfo } = require("../utils/testsWrapper");

const city = require("./soledad");

const dateCases = [
  {
    date: "2018-01-01", // Año Nuevo
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    date: "2018-03-19", // lunes festivo: San José
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    date: "2018-04-07", // sábado 7 de abril de 2018
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    date: "2018-02-04", // domingo 4 de febrero de 2018
    pypCases: {
      motocarros: "0-2-4-6-8- naranja"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      motos: "1-3",
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      motos: "5-7",
      motocarros: "0-2-4-6-8- naranja"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-01-31",
    pypCases: {
      motocarros: "0-2-4-6-8- naranja"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-03-31",
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-07-31",
    pypCases: {
      motocarros: "0-2-4-6-8- naranja"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-08-31",
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-10-31",
    pypCases: {
      motocarros: "0-2-4-6-8- naranja"
    }
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: "2018-12-31",
    pypCases: {
      motocarros: "1-3-5-7-9- azul"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
