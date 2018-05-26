import moment from "moment";
import slugify from "slugify";

import bogota from "../lib/bogota";
import medellin from "../lib/medellin";
import cali from "../lib/cali";
import santamarta from "../lib/santamarta";
import pasto from "../lib/pasto";
import tunja from "../lib/tunja";
import armenia from "../lib/armenia";
import pereira from "../lib/pereira";
import bucaramanga from "../lib/bucaramanga";
import buenaventura from "../lib/buenaventura";
import barranquilla from "../lib/barranquilla";
import cartagena from "../lib/cartagena";
import quibdo from "../lib/quibdo";
import manizales from "../lib/manizales";
import envigado from "../lib/envigado";
import cucuta from "../lib/cucuta";
import itagui from "../lib/itagui";
import ocana from "../lib/ocana";
import sabaneta from "../lib/sabaneta";
import laestrella from "../lib/laestrella";
import ibague from "../lib/ibague";
import popayan from "../lib/popayan";

export const cities = {
  armenia,
  barranquilla,
  bogota,
  bucaramanga,
  buenaventura,
  cali,
  cartagena,
  cucuta,
  envigado,
  itagui,
  laestrella,
  manizales,
  medellin,
  ocana,
  pasto,
  pereira,
  quibdo,
  sabaneta,
  santamarta,
  tunja,
  ibague,
  popayan
};
/**
 * Obtiene las categorías correspondientes a una ciudad dada en donde la llave es el slug ordenado
 * alfabéticamente y el valor es otro objecto que contiene la llave interna para acceder a la
 * categoría y el nombre humano para la categoría. Ejemplo:
 *   const manizalesCategories = getCategories('manizales')
 *   { taxis: {
 *       key: 'taxis',
 *       name: 'Taxis' },
 *     'transporte-publico-colectivo': {
 *       key: 'tpc',
 *       name: 'Transporte Público Colectivo' } }
 * @param {string} city La ciudad para la cual se desean consultar las categorías.
 * @returns {Object} Las categorías correspondientes a la ciudad con la llave y el nombre humano.
 */
export function getCategories(city) {
  const categoriesMap = {};
  const cityObj = cities[city];
  const categories = Object.keys(cityObj.categories).sort();
  categories.forEach(category => {
    const categoryName = cityObj.categories[category].name;
    const categorySlug = slugify(categoryName, { lower: true });
    categoriesMap[categorySlug] = { key: category, name: categoryName };
  });
  return categoriesMap;
}

/**
 * Devuelve un objecto con la información correspondiente a las ciudades almacenadas en donde la
 * llave es el slug ordenado alfabéticamente y el valor es un objeto con tres valores que son la llave interna para
 * acceder a la categoría, el nombre humano para la categoría y la lista de categorías disponibles.
 * Ejemplo:
 * const cities = getCities();
 * { armenia:
 *   { name: 'Armenia',
 *     key: 'armenia',
 *     categories: { motos: [Object], particulares: [Object], taxis: [Object] } },
 *  barranquilla:
 *   { name: 'Barranquilla',
 *     key: 'barranquilla',
 *     categories: { taxis: [Object] } },
 *  bogota:
 *   { name: 'Bogotá',
 *     key: 'bogota',
 *     categories:
 *       { ambiental: [Object],
 *         'servicio-de-transporte-especial': [Object],
 *         particulares: [Object],
 *         taxis: [Object],
 *         'transporte-publico-colectivo': [Object] } },
 *  bucaramanga:
 *   { name: 'Bucaramanga',
 *     key: 'bucaramanga',
 *     categories:
 *       { motos: [Object],
 *         particulares: [Object],
 *         taxis: [Object] } },
 *  ...
 * @returns {Object} Las ciudades disponibles con sus correspondientes categorías.
 */
export function getCities() {
  return Object.keys(cities)
    .sort()
    .reduce((result, city) => {
      const cityName = cities[city].name;
      const citySlug = slugify(cityName, { lower: true });
      // eslint-disable-next-line no-param-reassign
      result[citySlug] = {
        name: cityName,
        key: city,
        categories: getCategories(city)
      };
      return result;
    }, {});
}
/**
 * Devuelve un array con las categorías y los valores correspondientes al pico y placa para la
 * ciduad y la fecha solicitada. Si no se especifica la lista de categorías que se desea por defecto
 * se devuelven todas las categorías disponibles para la ciudad solicitada.
 * @param {string} city Ciudad para la cual se desea obtener la información
 * @param {string} date Fecha para la cual se desea obtener la información.
 * @param {Array} categories Opcional lista de categorías que se desean consultar.
 * @returns {Array} El valor del pyp para la ciudad y categorías solicitadas.
 */
export function getPyp(city, date, categories = []) {
  const pypCity = cities[city];
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort();
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true });
    const categoryPath = slugify(pypCity.categories[category].name, {
      lower: true
    });
    result.push({
      name: pypCity.categories[category].name,
      path: `${cityPath}/${categoryPath}`,
      pyp: pypCity.categories[category].pyp(date)
    });
    return result;
  }, []);
}
/**
 * Devuelve un objeto conla metainformación para la ciudad solicitada en donde las llaves son el
 * slug de las categorías correspondientes a la ciudad dada ordenada alfabéticamente. Si no se
 * especifican categorías por defecto se devuelven todas las categorías disponibles.
 * @param {string} city Ciudad para la cual se desea consultar la meta-información.
 * @param {Array} categories Opcional lista de categorías que se desean consultar.
 * @returns {Object} La meta-información para la ciudad y categorías solicitadas.
 */
export function getPypInfo(city, categories = []) {
  const pypCity = cities[city];
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort();
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true });
    const categoryPath = slugify(pypCity.categories[category].name, {
      lower: true
    });
    const { info } = pypCity.categories[category];
    info.name = pypCity.categories[category].name;
    info.path = `${cityPath}/${categoryPath}`;
    result[category] = info; // eslint-disable-line no-param-reassign
    return result;
  }, {});
}
/**
 * Devuelve la metainformación y la información correspondiente a la ciudad solicitada para la
 * fecha solicitada. Si no se especifican los días se desean sólo se devuelve la información para un
 * día correspondiente a la fecha solicita, de lo contrario, se devuelve la información de la
 * cantidad de días solicitados a partir de la fecha dada. Si no se especifican las categorías que
 * se desean consultar por defecto se devuelven todas las categorías disponibles para la ciudad
 * solicitada.
 * @param {string} city La ciudad para la cual se desea consultar la información.
 * @param {string} date La fecha para la cual se desea solicitar la información.
 * @param {Number} days Cantidad de días que se deasean consultar a partir de la fecha dada.
 * @param {Array} categories Lista de categorías que se desean consultar.
 * @returns {Object} Toda la información correspondiente a la ciudad, categorías y días solicitados.
 */
export function getPypData(city, date, days = 1, categories = []) {
  const pypCity = cities[city];
  const currentDate = moment(date);
  const result = {
    name: pypCity.name,
    path: slugify(pypCity.name, { lower: true }),
    info: getPypInfo(city, categories),
    data: []
  };
  for (let i = 0; i < days; i += 1) {
    result.data.push({
      date: currentDate.format(),
      categories: getPyp(city, currentDate, categories)
    });
    currentDate.add(1, "days");
  }
  return result;
}
