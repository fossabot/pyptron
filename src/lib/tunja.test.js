import tests from "../utils/testsWrapper";
import city from "./tunja";

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
  }
];
tests(city, dateCases);
