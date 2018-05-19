import request from "supertest";
import { getCities } from "../api/controller";
import app from "../app";
import config from "../config";

const appTest = app(config);

const citiesMap = getCities();

describe("Test API endpoints", () => {
  it("should GET /", done => {
    request(appTest)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        const pypData = res.body;
        const cities = Object.keys(pypData);
        expect(cities).toEqual(Object.keys(citiesMap));
        cities.forEach(city => {
          // Debe tener una propiedad nombre de tipo texto
          expect(typeof pypData[city].name).toBe("string");
          expect(pypData[city].name.length).toBeGreaterThan(0);
          // Debe tener un propiedad path igual a la ruta solicitada
          expect(typeof pypData[city].path).toBe("string");
          expect(pypData[city].path.length).toBeGreaterThan(0);
          // Debe tener un propiedad info
          expect(typeof pypData[city].info).toBe("object");
          // Debe tener una propiedad data
          expect(typeof pypData[city].data).toBe("object");
          expect(pypData[city].data.length).toBe(1);
        });
        done();
      });
  });
  const cities = Object.keys(citiesMap);
  it(`should return 404 for GET /nonExistingCity`, done => {
    request(appTest)
      .get("/nonExistingCity")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.cities.length).toBe(21);
        done();
      });
  });
  cities.forEach(city => {
    it(`should GET /${city}`, done => {
      request(appTest)
        .get(`/${city}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          const pypData = res.body;
          // Debe tener una propiedad nombre de tipo texto
          expect(typeof pypData.name).toBe("string");
          expect(pypData.name.length).toBeGreaterThan(0);
          // Debe tener un propiedad path igual a la ruta solicitada
          expect(typeof pypData.path).toBe("string");
          expect(pypData.path.length).toBeGreaterThan(0);
          expect(pypData.path).toBe(`${city}`);
          // Debe tener un propiedad info
          expect(typeof pypData.info).toBe("object");
          // Debe tener una propiedad data
          expect(typeof pypData.data).toBe("object");
          expect(pypData.data.length).toBe(1);
          done();
        });
    });
    const categories = Object.keys(citiesMap[city].categories);
    categories.forEach(category => {
      it(`should return 404 for GET /${city}/nonExistingCategory`, done => {
        request(appTest)
          .get(`/${city}/nonExistingCategory`)
          .expect("Content-Type", /json/)
          .expect(404)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body.categories.length).toBe(categories.length);
            done();
          });
      });
      const date = "2018-02-01";
      it(`should GET /${city}/${category}?date=${date}`, done => {
        request(appTest)
          .get(`/${city}/${category}?date=${date}`)
          .expect("Content-Type", /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            const pypData = res.body;
            // Debe tener una propiedad nombre de tipo texto
            expect(typeof pypData.name).toBe("string");
            expect(pypData.name.length).toBeGreaterThan(0);
            // Debe tener un propiedad path igual a la ruta solicitada
            expect(typeof pypData.path).toBe("string");
            expect(pypData.path.length).toBeGreaterThan(0);
            expect(pypData.path).toBe(`${city}`);
            // Debe tener un propiedad info
            expect(typeof pypData.info).toBe("object");
            // Debe tener una propiedad data
            expect(typeof pypData.data).toBe("object");
            expect(pypData.data[0].date).toBe(`${date}T00:00:00-05:00`);
            expect(pypData.data.length).toBe(1);
            done();
          });
      });
      const days = 5;
      it(`should GET /${city}/${category}?date=${date}&days=${days}`, done => {
        request(appTest)
          .get(`/${city}/${category}?date=${date}&days=${days}`)
          .expect("Content-Type", /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            const pypData = res.body;
            // Debe tener una propiedad nombre de tipo texto
            expect(typeof pypData.name).toBe("string");
            expect(pypData.name.length).toBeGreaterThan(0);
            // Debe tener un propiedad path igual a la ruta solicitada
            expect(typeof pypData.path).toBe("string");
            expect(pypData.path.length).toBeGreaterThan(0);
            expect(pypData.path).toBe(`${city}`);
            // Debe tener un propiedad info
            expect(typeof pypData.info).toBe("object");
            // Debe tener una propiedad data
            expect(typeof pypData.data).toBe("object");
            expect(pypData.data[0].date).toBe(`${date}T00:00:00-05:00`);
            expect(pypData.data.length).toBe(days);
            done();
          });
      });
    });
  });
});
