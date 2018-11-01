import tests from "../utils/testsWrapper";
import city from "./bogota";

const dateCases = [
  {
    date: "2018-04-07", // sábado 7 de abril de 2018
    pypCases: {
      ambiental: "1",
      taxis: "3-4",
      especial: "3-4",
      tpc: "1-2"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      ambiental: "2",
      taxis: "5-6",
      especial: "5-6",
      tpc: "3-4",
      particulares: "1-3-5-7-9"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      ambiental: "4",
      taxis: "9-0",
      especial: "9-0",
      tpc: "7-8",
      particulares: "0-2-4-6-8"
    }
  }
];
tests(city, dateCases);
