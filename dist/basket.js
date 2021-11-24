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

/***/ "./modules/basket.js":
/*!***************************!*\
  !*** ./modules/basket.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpdateBasketCountIcon\": () => (/* binding */ UpdateBasketCountIcon)\n/* harmony export */ });\n\r\n\r\nconst Basket = {\r\n    length: 0,\r\n\r\n    UpdateBasketPage: () => {\r\n\r\n        let page = \"\";\r\n        page = location.href.split(\"/\").slice(-1).toString(); \r\n        if(!page.includes(\"basket\")) \r\n        {\r\n            return;\r\n        }\r\n\r\n        UpdateBasketCountIcon();\r\n        \r\n        let products = Basket.getAddedProducts();\r\n\r\n        if(length > 0)\r\n        {\r\n            for (let i = 0; i < length; i++) {\r\n                const product = products[i];\r\n                \r\n                let elemProd = document.createElement(\"div\");\r\n                elemProd.className = \"main__items__product\";\r\n\r\n                let elemTit = document.createElement(\"div\");\r\n                elemTit.className = \"main__items__product--tittle\";\r\n                elemTit.textContent = product.tittle; \r\n\r\n                let elemDesc = document.createElement(\"div\");\r\n                elemDesc.className = \"main__items__product--description\";\r\n                elemDesc.textContent = product.description;\r\n\r\n                let elemSt = document.createElement(\"div\");\r\n                elemSt.className = \"main__items__product--status\";\r\n                elemSt.textContent = \"new!\"\r\n\r\n                elemProd.appendChild(elemTit);\r\n                elemProd.appendChild(elemDesc);\r\n                elemProd.appendChild(elemSt);\r\n                \r\n                let mainItems = document.querySelector(\".basket__items\");\r\n                mainItems.appendChild(elemProd);                \r\n            }           \r\n        }\r\n    },\r\n\r\n    getAddedProducts: () => {\r\n        let products = JSON.parse(sessionStorage.getItem(\"products\"));\r\n        if(products === null)\r\n        {\r\n            products = [];\r\n        }\r\n        length = products.length;\r\n        return products;\r\n    },\r\n}\r\n\r\nconst UpdateBasketCountIcon = () => {\r\n    let prods = JSON.parse(sessionStorage.getItem(\"products\"));\r\n    let elem = document.querySelector(\".header__basket--counter\");\r\n    let count = 0;\r\n    if(prods !== null)\r\n    {\r\n        count = prods.length;\r\n    }\r\n    elem.textContent = count;\r\n}  \r\n\r\nBasket.UpdateBasketPage();\r\n\n\n//# sourceURL=webpack:///./modules/basket.js?");

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
/******/ 	__webpack_modules__["./modules/basket.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;