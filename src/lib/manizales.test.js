import testCases from "../utils/testsWrapper";
import city from "./manizales";

const dateCases = [
  {
    date: "2018-01-06", // Sábado
    pypCases: {
      tpc: "A",
      taxis: "3"
    }
  },
  {
    date: "2018-01-13", // Sábado
    pypCases: {
      tpc: "G"
    }
  },
  {
    date: "2018-04-07", // sábado 7 de abril de 2018
    pypCases: {
      tpc: "B",
      taxis: "0"
    }
  },
  {
    date: "2018-02-04", // domingo 4 de febrero de 2018
    pypCases: {
      taxis: "2"
    }
  },
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      tpc: "C",
      taxis: "1-2"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      tpc: "F",
      taxis: "5-6"
    }
  },
  {
    date: "2018-06-14", // jueves 14 de junio de 2018
    pypCases: {
      tpc: "B",
      taxis: "5-6"
    }
  },
  {
    date: "2018-06-09", // sábado 9 de junio
    pypCases: {
      taxis: "8",
      tpc: "H"
    }
  },
  {
    date: "2018-12-29", // sábado 29 de diciembre
    pypCases: {
      taxis: "5",
      tpc: "G"
    }
  },
  {
    date: "2018-12-30", // domingo 30 de diciembre
    pypCases: {
      taxis: "6",
      tpc: "NA"
    }
  },
  {
    date: "2018-01-07", // domingo 7 de enero
    pypCases: {
      taxis: "4",
      tpc: "NA"
    }
  }
];
testCases(city, dateCases);
