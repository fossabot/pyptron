import { testCases, testInfo } from "../utils/testsWrapper";
import city from "./pasto";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "6-7",
      motos: "6-7"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "0-1",
      motos: "0-1"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
