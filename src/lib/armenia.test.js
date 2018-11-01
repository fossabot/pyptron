import tests from "../utils/testsWrapper";
import city from "./armenia";

const dateCases = [
  {
    date: "2018-02-08",
    pypCases: {
      taxis: "3-4"
    }
  },
  {
    date: "2018-03-12",
    pypCases: {
      taxis: "7-8"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "1-2",
      motos: "1-2",
      taxis: "5-6"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "5-6",
      motos: "5-6"
    }
  }
];
tests(city, dateCases);
