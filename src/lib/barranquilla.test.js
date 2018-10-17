import testCases from "../utils/testsWrapper";
import city from "./barranquilla";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      taxis: "3-4"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      taxis: "7-8"
    }
  }
];
testCases(city, dateCases);
