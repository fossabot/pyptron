import { readdir } from "fs";
import {
  getCategories,
  getCities,
  getPyp,
  getPypData,
  getPypInfo,
  ISOString
} from "./helpers";

const dir = "./src/lib";
let totalCities = 0;

describe("test for ISOString", () => {
  it(`should append the time offset to the date`, () => {
    expect(ISOString("2018-01-01")).toBe("2018-01-01T00:00:00.000-05:00");
  });
});

beforeAll(done => {
  readdir(dir, (err, files) => {
    // la cantidad de ciudades que hay en la librería para verificar más adelante que corresponda
    // con la cantidad de ciudades devueltas por la función. Restamos uno para descontar el dir
    // __test__
    totalCities = files.length - 1;
    done();
  });
});

describe("Generate pyp object maps of global info with the slug and the key", () => {
  it("should return map with all categories for a given city", () => {
    const categoriesMap = getCategories("bogota");
    const categories = Object.keys(categoriesMap);
    expect(typeof categoriesMap).toBe("object");
    expect(categories.length).toBe(5);
    categories.forEach(category => {
      expect(typeof categoriesMap[category]).toBe("object");
      expect(Object.keys(categoriesMap[category]).length).toBe(2);
      expect(typeof categoriesMap[category].name).toBe("string");
      expect(categoriesMap[category].name.length).toBeGreaterThan(0);
      expect(typeof categoriesMap[category].key).toBe("string");
      expect(categoriesMap[category].key.length).toBeGreaterThan(0);
    });
  });
  it("should return map with all cities containing name, key, categories", () => {
    const citiesMap = getCities();
    const cities = Object.keys(citiesMap);
    expect(typeof citiesMap).toBe("object");
    expect(cities.length).toBe(totalCities);
    cities.forEach(city => {
      expect(typeof citiesMap[city]).toBe("object");
      expect(Object.keys(citiesMap[city]).length).toBe(3);
      expect(typeof citiesMap[city].name).toBe("string");
      expect(citiesMap[city].name.length).toBeGreaterThan(0);
      expect(typeof citiesMap[city].key).toBe("string");
      expect(citiesMap[city].key.length).toBeGreaterThan(0);
      expect(typeof citiesMap[city].categories).toBe("object");
    });
  });
});

describe("Generate pyp data objects", () => {
  it("should return data for three days for all categories", () => {
    const date = "2018-03-06T00:00:02.000-05:00";
    const days = 3;
    const result = getPypData("bogota", date, days);
    expect(result.data.length).toBe(3);
    expect(result.name).toBe("Bogotá");
    expect(result).toMatchSnapshot();
  });
  it("should return data for two categories", () => {
    const date = "2018-03-06T00:00:02-05:00";
    const days = 3;
    const categories = ["taxis", "ambiental"];
    const result = getPypData("bogota", date, days, categories);
    expect(result.data.length).toBe(3);
    expect(result.name).toBe("Bogotá");
    expect(result.data[0].categories.length).toBe(categories.length);
    expect(result.data[0].categories[0].name).toBe("Taxis");
    expect(result.data[0].categories[0].path).toBe("bogota/taxis");
    expect(Object.keys(result.info).length).toBe(categories.length);
  });
  it("should return pyp meta-info for all categories", () => {
    expect(getPypInfo("bogota")).toMatchSnapshot();
  });
  it("should return pyp data for one date", () => {
    const date = "2018-03-06T00:00:02-05:00";
    expect(getPyp("bogota", date)).toMatchSnapshot();
  });
});
