import tests from "../utils/testsWrapper";
import city from "./ocana";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "5-6",
      motos: "5-6"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "9-0",
      motos: "9-0"
    }
  }
];
tests(city, dateCases);
