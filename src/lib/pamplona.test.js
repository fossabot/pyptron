import { testCases, testInfo } from "../utils/testsWrapper";
import city from "./pamplona";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "1-2",
      motos: "1-2"
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
testCases(city, dateCases);
testInfo(city);
