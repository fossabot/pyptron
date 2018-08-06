import testCases from "../../utils/testsWrapper";
import city from "../popayan";

const dateCases = [
  {
    date: "2018-02-02", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "0"
    }
  },
  {
    date: "2018-02-23", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "5"
    }
  },
  {
    date: "2018-04-18", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "8"
    }
  },
  {
    date: "2018-12-14", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "9"
    }
  },
  {
    date: "2018-06-06", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "0"
    }
  },
  {
    date: "2018-10-31", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "9"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      particulares: "3-4",
      motos: "3-4",
      tpc: "3"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: "7-8",
      motos: "7-8",
      tpc: "6"
    }
  },
  {
    date: "2018-07-03", // martes 3 de Julio de 2018
    pypCases: {
      particulares: "3-4",
      motos: "3-4",
      tpc: "7"
    }
  },
  {
    date: "2018-10-18", // jueves 18 de octubre de 2018
    pypCases: {
      particulares: "7-8",
      motos: "7-8",
      tpc: "0"
    }
  }
];
testCases(city, dateCases);
