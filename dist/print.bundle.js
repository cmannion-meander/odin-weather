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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nfunction getWeather(location) {\n    console.log(`Trying to get weather from ${location}`);\n    console.log(loadWeather(location));\n  };\n   \nasync function loadWeather(location) {\n    let input = location.toLowerCase();\n    \n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8a84e8aab8c24f2388f134054230506&q=${input}&days=3`, {mode: 'cors'});\n    const data = await response.json();\n    extractWeather(data);\n};\n\nasync function extractWeather(jsonData) {\n    const current = jsonData.current;\n    const today = jsonData.forecast.forecastday[0].day;\n    const tomorrow = jsonData.forecast.forecastday[1].day;\n    const twoday = jsonData.forecast.forecastday[2].day;\n\n    displayWeather(current, today, tomorrow, twoday);\n};\n\nfunction displayWeather(current, today, tomorrow, twoday) {\n    console.log(current);\n    console.log(today);\n    console.log(tomorrow);\n    console.log(twoday);\n};\n\n//# sourceURL=webpack://odin-weather/./src/print.js?");

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