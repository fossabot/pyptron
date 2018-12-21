const { testCases, testInfo } = require("../utils/testsWrapper");

const city = require("./cali");

const dateCases = [
  {
    date: "2018-01-01", // Año Nuevo
    pypCases: {
      taxis: "7-8",
      tpc: "6-7"
    }
  },
  {
    date: "2018-03-19", // lunes festivo: San José
    pypCases: {
      taxis: "1-2",
      tpc: "0-1"
    }
  },
  {
    date: "2018-04-07", // sábado 7 de abril de 2018
    pypCases: {
      taxis: "9-0",
      tpc: "8-9"
    }
  },
  {
    date: "2018-02-04", // domingo 4 de febrero de 2018
    pypCases: {
      taxis: "5-6",
      tpc: "4-5"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "3-4",
      taxis: "3-4",
      tpc: "2-3"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "7-8",
      taxis: "7-8",
      tpc: "6-7"
    }
  },
  {
    date: "2018-07-09", // lunes 9 de julio de 2018
    pypCases: {
      particulares: "1-2",
      taxis: "5-6"
      // tpc: "4-5"
    }
  },
  {
    date: "2018-08-15", // miércoles 15 de agosto de 2018
    pypCases: {
      particulares: "5-6",
      taxis: "9-0"
      // tpc: "6-7"
    }
  },
  {
    date: "2018-10-12", // viernes 12 de octubre de 2018
    pypCases: {
      particulares: "9-0",
      taxis: "5-6"
      // tpc: "6-7"
    }
  },
  {
    date: "2018-12-01", // viernes 12 de octubre de 2018
    pypCases: {
      taxis: "5-6"
      // tpc: "6-7"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
