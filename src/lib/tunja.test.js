const { testCases, testInfo } = require("../utils/testsWrapper");

const city = require("./tunja");

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "5-6",
      taxis: "5-6"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "9-0",
      taxis: "7-8"
    }
  },
  {
    date: "2019-01-11", // viernes 11 de enero de 2019
    pypCases: {
      particulares: "3-4"
    }
  },
  {
    date: "2019-01-15", // martes 15 de enero de 2019
    pypCases: {
      particulares: "5-6"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
