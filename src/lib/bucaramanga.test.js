import { testCases, testInfo } from "../utils/testsWrapper";
import city from "./bucaramanga";

const dateCases = [
  {
    date: "2018-04-07", // sábado 7 de abril de 2018
    pypCases: {
      particulares: "9-0",
      motos: "9-0"
    }
  },
  {
    date: "2018-03-26", // lunes 26 de marzo de 2018
    pypCases: {
      particulares: "3-4",
      motos: "3-4",
      taxis: "3-4"
    }
  },
  {
    date: "2018-04-02", // lunes 2 de abirl de 2018
    pypCases: {
      particulares: "5-6",
      motos: "5-6",
      taxis: "5-6"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "5-6",
      motos: "5-6",
      taxis: "7-8"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "9-0",
      motos: "9-0",
      taxis: "1-2"
    }
  },
  {
    date: "2018-07-03", // martes 3 de julio de 2018
    pypCases: {
      particulares: "9-0",
      motos: "9-0"
    }
  },
  {
    date: "2018-07-07", // sábado 7 de julio de 2018
    pypCases: {
      particulares: "5-6",
      motos: "5-6"
    }
  },
  {
    date: "2018-10-01", // lunes 1 de octubre de 2018
    pypCases: {
      particulares: "9-0",
      motos: "9-0"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
