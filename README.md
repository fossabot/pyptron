# ![pyptron](https://www.pyphoy.com/imgs/pyphoy.svg)

[![CircleCI](https://circleci.com/gh/picoyplaca/pyptron.svg?style=svg)](https://circleci.com/gh/picoyplaca/pyptron)
[![codecov](https://codecov.io/gh/picoyplaca/pyptron/branch/master/graph/badge.svg)](https://codecov.io/gh/picoyplaca/pyptron)
[![Greenkeeper badge](https://badges.greenkeeper.io/picoyplaca/pyptron.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpicoyplaca%2Fpyptron.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpicoyplaca%2Fpyptron?ref=badge_shield)

Modulo para calcular el Pico y Placa en las distintas ciudades de Colombia.

![Pico y placa](https://media.giphy.com/media/l0HlKQPTHOGNUPTZm/giphy.gif)

## Instalación

```shell
npm i @picoyplaca/pyptron
```

## Uso

**Pyptron** exporta dos funciones para acceder a la información disponible del Pico y Placa. Toda la información está contenida en el módulo y el cálculo para obtener el número al que le corresponde el pico y placa en un día determinado se hace en el momento en que se hace la solicitud de la información.

Las dos funciones disponibles por medio de `pyptron` son:

- [`getCitiesMap()`](#getCitiesMap): Devuelve un objecto con las ciudades disponibles y las categorías disponibles para cada ciudad.
- [`getCityData(city[, options])`](#getCityData): Devuelve la información disponible para la ciudad solicitada de acuerdo con las opciones dadas.

### getCitiesMap

Devuelve un objeto con las ciudades disponibles y las categorías disponibles para cada ciudad.

```js
const { getCitiesMap } = require('@picoyplaca/pyptron')
const citiesMap = getCitiesMap()
```

### getCityData

Devuelve la información disponible para la ciudad solicitada de acuerdo con las opciones dadas.

```js
const { getCityData } = require('@picoyplaca/pyptron')
const pypData = getCityData('bogota', { categories: ['particulares', 'taxis'], date: '2019-05-15', days=15 })
```

#### Argumentos

| Argumento   | Descripción                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `city`      | String - El nombre de la ciudad correspondiente al valor `key` de la ciudad en el objeto devuelto por la función `getCitiesMap`.                                              |
| `[options]` | Objeto - Opciones que se desean para la ciudad. Si se omite, se devuelve la información para todas las categorías de la ciudad solicitada correspondientes a la fecha actual. |

Las opciones no son requeridas y se pueden incluir cualquiera de las siguientes.

| Opción     | Descripción                                                                                                                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| categories | Array - La categorías que se desean consultar según el valor `key` de la categoría como es devuelto por la función `getCitiesMap`. Si se omite o se pasa un `Array` vacio se devuelven todas las categorías disponibles para la ciudad. |
| date       | String - La fecha para la cual se solicita la información en formato `YYYY-MM-DD`. Si se omite se usa por defecto la fecha actual.                                                                                                      |
| days       | Integer - La cantidad de días que se desean consultar. Por defecto se usa el valor de `1`. Se pueden solicitar un máximo de 30 días, si se pasa un número mayor a 30 se devolverán 30 días.                                             |

## Licencia

[MIT](LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpicoyplaca%2Fpyptron.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpicoyplaca%2Fpyptron?ref=badge_large)