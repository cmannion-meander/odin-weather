/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nfunction getWeather() {\n    let location = document.getElementById('searchbar').value;\n\n    console.log(`Trying to get weather for ${location}`);\n\n    return loadWeather(location);\n  };\n   \nasync function loadWeather(location) {\n    let input = location.toLowerCase();\n    \n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8a84e8aab8c24f2388f134054230506&q=${input}&days=3`, {mode: 'cors'});\n    const data = await response.json();\n\n    extractWeather(data);\n};\n\nasync function extractWeather(jsonData) {\n    const current = jsonData.current;\n    const today = jsonData.forecast.forecastday[0].day;\n    const tomorrow = jsonData.forecast.forecastday[1].day;\n    const twoday = jsonData.forecast.forecastday[2].day;\n\n    displayWeather(current, today, tomorrow, twoday);\n};\n\nasync function displayWeather(current, today, tomorrow, twoday) {\n    const content = document.querySelector(\".content\");\n\n    removeAllChildNodes(content);\n\n    let todayWxGif = await loadGif(current.condition.text);\n    let todayFxGif = await loadGif(today.condition.text);\n    let tomorrowFxGif = await loadGif(tomorrow.condition.text);\n    let twodayFxGif = await loadGif(twoday.condition.text);\n\n    const todayWx = document.createElement('div');\n    todayWx.classList.add(\"card\");\n    todayWx.innerHTML = `\n    <h2>Current Weather</h2>\n    <ul>\n        <li> Conditions: ${current.condition.text}</li>\n        <li> Current Temp: ${current.temp_f} Fahrenheit</li>\n    </ul>\n    `;\n    const todayWxImg = document.createElement('img');\n    todayWxImg.src = todayWxGif;\n    todayWx.appendChild(todayWxImg);\n\n    const todayFx = document.createElement('div');\n    todayFx.classList.add(\"card\");\n    todayFx.innerHTML = `\n    <h2>Today's Forecast</h2>\n    <ul>\n        <li> Conditions: ${today.condition.text}</li>\n        <li> Avg Temp: ${today.avgtemp_f} Fahrenheit</li>\n        <li> Chance of Rain: ${today.daily_chance_of_rain}% </li>\n    </ul>\n    `;\n    const todayFxImg = document.createElement('img');\n    todayFxImg.src = todayFxGif;\n    todayFx.appendChild(todayFxImg);\n\n    const tomorrowFx = document.createElement('div');\n    tomorrowFx.classList.add(\"card\");\n    tomorrowFx.innerHTML = `\n    <h2>Tomorrow's Forecast</h2>\n    <ul>\n        <li> Conditions: ${tomorrow.condition.text}</li>\n        <li> Avg Temp: ${tomorrow.avgtemp_f} Fahrenheit</li>\n        <li> Chance of Rain: ${tomorrow.daily_chance_of_rain}% </li>\n    </ul>\n    `;\n    const tomorrowFxImg = document.createElement('img');\n    tomorrowFxImg.src = tomorrowFxGif;\n    tomorrowFx.appendChild(tomorrowFxImg);\n\n    const twodayFx = document.createElement('div');\n    twodayFx.classList.add(\"card\");\n    twodayFx.innerHTML = `\n    <h2>Two Days from Now Forecast</h2>\n    <ul>\n        <li> Conditions: ${twoday.condition.text}</li>\n        <li> Avg Temp: ${twoday.avgtemp_f} Fahrenheit</li>\n        <li> Chance of Rain: ${twoday.daily_chance_of_rain}% </li>\n    </ul>\n    `;\n    const twodayFxImg = document.createElement('img');\n    twodayFxImg.src = twodayFxGif;\n    twodayFx.appendChild(twodayFxImg);\n\n    content.appendChild(todayWx);\n    content.appendChild(todayFx);\n    content.appendChild(tomorrowFx);\n    content.appendChild(twodayFx);\n\n    console.log(current);\n    console.log(today);\n    console.log(tomorrow);\n    console.log(twoday);\n};\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n};\nasync function loadGif(wxConditions) {\n    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=aadl6EcoVSJxdrp1kXDuf4hHcEg6iR4P&s=${wxConditions}`, {mode: 'cors'});\n    const gifData = await response.json();\n    const imgUrl = gifData.data.images.original.url;\n    return imgUrl;\n};\n\n\n\n//# sourceURL=webpack://odin-weather/./src/print.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/print.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;