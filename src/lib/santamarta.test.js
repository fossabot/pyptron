const { testCases, testInfo } = require("../utils/testsWrapper");

const city = require("./santamarta");

const dateCases = [
  {
    date: "2018-03-12", // viernes 12 de marzo de 2018
    pypCases: {
      taxis: "8-9"
    }
  },
  {
    date: "2018-04-06", // viernes 6 de abril de 2018
    pypCases: {
      taxis: "0-1"
    }
  },
  {
    date: "2018-08-13", // lunes 13 de agosto de 2018
    pypCases: {
      taxis: "4-5"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "8-9",
      motos: "1-2-3-4",
      taxis: "0-1"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "2-3",
      motos: "9-0-1-2",
      taxis: "4-5"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
