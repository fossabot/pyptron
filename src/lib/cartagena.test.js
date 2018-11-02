import { testCases, testInfo } from "../utils/testsWrapper";
import city from "./cartagena";

const dateCases = [
  {
    date: "2018-04-09", // lunes 9 de abril de 2018
    pypCases: {
      taxis: "9-0",
      particulares: "3-4"
    }
  },
  {
    date: "2018-05-16", // miércoles 16 de mayo de 2018
    pypCases: {
      taxis: "1-2",
      particulares: "7-8"
    }
  },
  {
    date: "2018-06-14", // jueves 14 de junio de 2018
    pypCases: {
      taxis: "1-2",
      particulares: "1-2"
    }
  },
  {
    date: "2018-02-01", // jueves 1 de febrero
    pypCases: {
      taxis: "1-2",
      particulares: "7-8"
    }
  },
  {
    date: "2018-02-02", // viernes 2 de febrero
    pypCases: {
      taxis: "3-4",
      particulares: "9-0"
    }
  },
  {
    date: "2018-02-05", // lunes 5 de febrero
    pypCases: {
      taxis: "3-4",
      particulares: "1-2"
    }
  },
  {
    date: "2018-03-02", // viernes 2 de marzo
    pypCases: {
      taxis: "1-2",
      particulares: "9-0"
    }
  },
  {
    date: "2018-03-05", // lunes 5 de marzo
    pypCases: {
      taxis: "1-2",
      particulares: "3-4"
    }
  },
  {
    date: "2018-04-30", // lunes 30 de abril
    pypCases: {
      taxis: "7-8",
      particulares: "3-4"
    }
  },
  {
    date: "2018-06-01", // viernes 1 de junio
    pypCases: {
      taxis: "5-6",
      particulares: "1-2"
    }
  },
  {
    date: "2018-10-01", // lunes 1 de octubre
    pypCases: {
      taxis: "7-8",
      particulares: "7-8"
    }
  },
  {
    date: "2018-10-02", // martes 2 de octubre
    pypCases: {
      taxis: "9-0",
      particulares: "9-0"
    }
  },
  {
    date: "2018-04-04", // miércoles 2 de abril
    pypCases: {
      taxis: "3-4",
      particulares: "7-8"
    }
  },
  {
    date: "2018-09-03", // lunes 3 de septiembre
    pypCases: {
      taxis: "9-0",
      particulares: "7-8"
    }
  }
];
testCases(city, dateCases);
testInfo(city);
