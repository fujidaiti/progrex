/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var progrex_frontend;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.render = void 0;\nconst renderer_1 = __webpack_require__(/*! ./renderer */ \"./src/renderer.ts\");\nfunction render() {\n    const canvas = document.createElement('canvas');\n    canvas.width = 600;\n    canvas.height = 150;\n    document.body.appendChild(canvas);\n    renderer = new renderer_1.Renderer(canvas);\n    renderer.start();\n}\nexports.render = render;\nlet renderer;\nrender();\n\n\n//# sourceURL=webpack://progrex_frontend/./src/main.ts?");

/***/ }),

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Renderer = void 0;\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nclass Renderer {\n    constructor(canvas) {\n        this.t = 0;\n        this.canvas = canvas;\n        this.context = utils_1.nonnull(canvas.getContext('2d'));\n    }\n    start() {\n        window.requestAnimationFrame((ts) => this.on_frame(ts));\n    }\n    on_frame(timestamp) {\n        this.draw_frame(timestamp);\n        window.requestAnimationFrame((ts) => this.on_frame(ts));\n    }\n    draw_frame(timestamp) {\n        console.log(timestamp);\n        this.context.fillStyle = 'rgb(255,255,255)';\n        this.context.fillRect(0, 0, 600, 150);\n        const x = Math.sin((2 * Math.PI * this.t) / 60.0) * 300 + 300;\n        this.context.fillStyle = 'rgb(0,0,255)';\n        this.context.fillRect(x, 10, 100, 100);\n        this.t += 1;\n    }\n}\nexports.Renderer = Renderer;\n\n\n//# sourceURL=webpack://progrex_frontend/./src/renderer.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.nonnull = void 0;\nfunction nonnull(value) {\n    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion\n    return value;\n}\nexports.nonnull = nonnull;\n\n\n//# sourceURL=webpack://progrex_frontend/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	progrex_frontend = __webpack_exports__;
/******/ 	
/******/ })()
;export function render() { progrex_frontend.render(); }
