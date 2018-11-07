export const testInfo = city => {
  Object.keys(city.categories).forEach(categoryName => {
    describe(`'pyp' should be a function for ${categoryName}`, () => {
      it("should be a function", () => {
        city.categories[categoryName].forEach(category => {
          expect(typeof category.pyp).toBe("function");
        });
      });
    });
    describe(`The categories must be an array with from data`, () => {
      it("should be an array with at least one element", () => {
        expect(Array.isArray(city.categories[categoryName])).toBe(true);
        expect(city.categories[categoryName].length).toBeGreaterThan(0);
      });
      it(`should be sorted descending using 'from' key for ${categoryName}`, () => {
        expect(
          city.categories[categoryName].every(
            (val, i, arr) => !i || val.from <= arr[i - 1].from
          )
        ).toBe(true);
      });
    });
    city.categories[categoryName].forEach(category => {
      describe(`Test for category object elements`, () => {
        it(`should return 'from' for ${categoryName}`, () => {
          expect(typeof category.from).toBe("string");
          const pattern = new RegExp(/\d{4}-\d{2}-\d{2}/);
          expect(pattern.test(category.from)).toBe(true);
        });
        it(`should return 'name' for ${categoryName}`, () => {
          expect(typeof category.name).toBe("string");
          expect(category.name.length).toBeGreaterThan(0);
        });
        it(`should return 'na' array for ${categoryName}`, () => {
          expect(Array.isArray(category.na)).toBe(true);
        });
      });
      describe(`Test for ${city.name} info`, () => {
        it(`Should return a string for the name of ${categoryName}`, () => {
          expect(typeof category.name).toBe("string");
          expect(category.name.length).toBeGreaterThan(0);
        });
        it(`Should return an array for 'na' of ${categoryName}`, () => {
          expect(Array.isArray(category.na)).toBe(true);
          expect(category.name.length).toBeGreaterThan(0);
        });
        const { info } = category;
        it(`Should return an array for 'vehicleClasses' of ${categoryName}`, () => {
          expect(Array.isArray(info.vehicleClasses)).toBe(true);
          expect(category.name.length).toBeGreaterThan(0);
        });
        it(`Should return scheme info of ${categoryName}`, () => {
          expect(typeof info.scheme).toBe("string");
        });
        it(`Should return decrees info for ${categoryName}`, () => {
          const { decrees } = info;
          expect(Array.isArray(decrees)).toBe(true);
          decrees.forEach(decree => {
            expect(typeof decree.name).toBe("string");
            expect(typeof decree.url).toBe("string");
          });
        });
        it(`Should return hours info for ${categoryName}`, () => {
          const { hours } = info;
          expect(Array.isArray(hours)).toBe(true);
          hours.forEach(hour => {
            expect(typeof hour.comment).toBe("string");
            expect(Array.isArray(hour.days)).toBe(true);
            expect(Array.isArray(hour.hours[0])).toBe(true);
            hour.hours.forEach(h => {
              expect(h.length === 0 || h.length === 2).toBe(true);
            });
          });
        });
      });
    });
  });
};

export const testCases = (city, dateCases) => {
  describe(`Test cases for ${city.name}`, () => {
    const times = ["T00:00:00.000-05:00", "T23:59:59.999-05:00"];
    // cada caso para cada fecha. Por ello comenzamos recorriendo cada uno de
    // los objetos que vamos en evaluar para cada uno de los test, tomando como
    // referente la fecha.
    dateCases.forEach(dateCase => {
      // Ahora recorremos cada uno de los casos que hay para cada fecha.
      Object.keys(dateCase.pypCases).forEach(pypCase => {
        // Este es el valor esperado para cada uno caso de los casos que vamos a
        // evaluar.
        const pypNum = dateCase.pypCases[pypCase];
        // Por último, vamos a evaluar cada caso de cada fecha en distintas
        // horas para verificar que da el resultado esperado independiente de la
        // hora para comprobar que no estamos teniendo saltos de fecha por zona
        // horaria.
        it(`should return '${pypNum}' for '${pypCase}' @${
          dateCase.date
        }`, () => {
          times.forEach(time => {
            const pypDate = dateCase.date + time;
            let activeCategory = {};
            for (let i = 0; i < city.categories[pypCase].length; i += 1) {
              const currentCat = city.categories[pypCase][i];
              if (pypDate >= `${currentCat.from}T00:00:00.000-05:00`) {
                activeCategory = currentCat;
                break;
              }
            }
            const result = activeCategory.pyp(pypDate);
            expect(result).toBe(pypNum);
          });
        });
      });
    });
  });
};
