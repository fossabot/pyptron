/* eslint no-prototype-builtins: 0 */

import debug from "debug";
import express from "express";
import * as pyptron from "../utils/helpers";

const debugRoute = debug("pyphoy:route");

const router = express.Router();

const citiesMap = pyptron.getCities();

/* GET cities map. */
router.get("/cities", (req, res) => {
  res.json(citiesMap);
});

router.get("/", (req, res) => {
  const date = req.query.date || new Date();
  try {
    res.json(
      Object.keys(citiesMap).reduce((result, city) => {
        // eslint-disable-next-line no-param-reassign
        result[city] = pyptron.getPypData(citiesMap[city].key, date);
        return result;
      }, {})
    );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

/* GET city page. */
router.get("/:city", (req, res) => {
  const { city } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
  // verificamos que la ciudad solicitada esté disponible
  if (!citiesMap.hasOwnProperty(city)) {
    res
      .status(404)
      .json({ error: "City not found", cities: Object.keys(citiesMap) });
    return;
  }
  const cityKey = citiesMap[city].key;
  try {
    const pypData = pyptron.getPypData(cityKey, date);
    res.json(pypData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

/* GET category page. */
router.get("/:city/:category", (req, res) => {
  const { city, category } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
  const days = req.query.days || 1;
  // verificamos que la ciudad solicitada se encuentre disponible
  if (!citiesMap.hasOwnProperty(city)) {
    res
      .status(404)
      .json({ error: "City not found", cities: Object.keys(citiesMap) });
    return;
  }
  // verificamos que la categoría solicita se encuentre disponible dentro de la ciudad
  if (!citiesMap[city].categories.hasOwnProperty(category)) {
    res.status(404).json({
      error: "Category not found",
      categories: Object.keys(citiesMap[city].categories)
    });
    return;
  }
  const cityKey = citiesMap[city].key;
  const categoryKey = citiesMap[city].categories[category].key;
  try {
    const pypData = pyptron.getPypData(cityKey, date, days, [categoryKey]);
    res.json(pypData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

/* GET number query page. */
router.get("/:city/:category/:number", (req, res) => {
  const { city, category } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
  const days = req.query.days || 1;
  // verificamos que la ciudad solicitada se encuentre disponible
  if (!citiesMap.hasOwnProperty(city)) {
    res
      .status(404)
      .json({ error: "City not found", cities: Object.keys(citiesMap) });
    return;
  }
  // verificamos que la categoría solicita se encuentre disponible dentro de la ciudad
  if (!citiesMap[city].categories.hasOwnProperty(category)) {
    res.status(404).json({
      error: "Category not found",
      categories: Object.keys(citiesMap[city].categories)
    });
    return;
  }
  const cityKey = citiesMap[city].key;
  const categoryKey = citiesMap[city].categories[category].key;
  try {
    const pypData = pyptron.getPypData(cityKey, date, days, [categoryKey]);
    res.json(pypData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
