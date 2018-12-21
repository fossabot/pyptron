/* eslint no-prototype-builtins: 0 */

const debug = require("debug");
const express = require("express");
const pyptron = require("../utils/helpers");

const debugRoute = debug("pyphoy:route");

const router = express.Router();

const citiesMap = pyptron.getCities();

router.get("/", (req, res) => {
  res.json(citiesMap);
});

router.get("/:city", (req, res) => {
  const { city } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
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

router.get("/:city/:category", (req, res) => {
  const { city, category } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
  const days = req.query.days || 1;
  if (!citiesMap.hasOwnProperty(city)) {
    res
      .status(404)
      .json({ error: "City not found", cities: Object.keys(citiesMap) });
    return;
  }
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

router.get("/:city/:category/:number", (req, res) => {
  const { city, category } = req.params;
  debugRoute("Requested city:", city);
  debugRoute("Query string:", req.query);
  const date = req.query.date || new Date();
  const days = req.query.days || 1;
  if (!citiesMap.hasOwnProperty(city)) {
    res
      .status(404)
      .json({ error: "City not found", cities: Object.keys(citiesMap) });
    return;
  }
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

module.exports = router;
