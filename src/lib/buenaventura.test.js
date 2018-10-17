import testCases from "../utils/testsWrapper";
import city from "./buenaventura";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "3-4",
      tpc: "3-4",
      taxis: "3-4"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "7-8",
      tpc: "7-8",
      taxis: "7-8"
    }
  },
  {
    date: "2018-03-12", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "3-4",
      tpc: "3-4",
      taxis: "3-4"
    }
  },
  {
    date: "2018-07-09", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "1-2",
      tpc: "1-2",
      taxis: "1-2"
    }
  },
  {
    date: "2018-11-13", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "3-4",
      tpc: "3-4",
      taxis: "3-4"
    }
  },
  {
    date: "2019-01-14", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "9-0",
      tpc: "9-0",
      taxis: "9-0"
    }
  }
];
testCases(city, dateCases);
