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

/***/ }),

/***/ "./modules/main.js":
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainAddToBasket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainAddToBasket.js */ \"./modules/mainAddToBasket.js\");\n/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.js */ \"./modules/basket.js\");\n\r\n\r\nconsole.log(\"main.js is loading...\");\r\n\r\n\r\n\r\n\r\n\r\nconst App = {\r\n    product: {\r\n        tittle: \"\",\r\n        description: \"\",\r\n        image: \"\",\r\n        category: \"\",\r\n    },\r\n    products: [],\r\n\r\n    productCategories: [\r\n        \"Smartphones\",\r\n        \"SmartWatches\",\r\n        \"ComputerMouses\",\r\n        \"Others\",\r\n    ],\r\n\r\n    Main: function(){\r\n\r\n        this.UpdateListOfProductsOnMainPage();    \r\n        this.AddEventsOnCategories();\r\n        this.UpdateMainPage();\r\n    },\r\n\r\n\r\n    UpdateMainPage: function(){ \r\n        this.AddEventsOnAddToBasket();\r\n        (0,_basket_js__WEBPACK_IMPORTED_MODULE_1__.UpdateBasketCountIcon)();\r\n    },\r\n\r\n    UpdateListOfProductsOnMainPage: function(categoryFilter){\r\n        let allProducts = this.getAllProductsInStore()\r\n        let length = allProducts.length;\r\n        if(length < 1)\r\n        {\r\n            allProducts = this.getInitialListOfProducts();\r\n            length = allProducts.length;\r\n            this.initializeNewStorage(allProducts);\r\n        }\r\n        if(categoryFilter != null)\r\n        {\r\n            App.cleanListOfProductsOnPage();\r\n            let filteredProducts = [];\r\n            filteredProducts = allProducts.filter(p => p.category == categoryFilter);\r\n            allProducts = filteredProducts;\r\n            length = allProducts.length;\r\n        }\r\n\r\n        for (let i = 0; i < length; i++) {\r\n            const product = allProducts[i];\r\n            \r\n            let elemProd = document.createElement(\"div\");\r\n            elemProd.className = \"main__items__item\";\r\n\r\n            let elemTit = document.createElement(\"div\");\r\n            elemTit.className = \"main__items__item--tittle\";\r\n            elemTit.textContent = product.tittle; \r\n\r\n            let elemImg = document.createElement(\"img\");\r\n            elemImg.className = \"main__items__item--image\";\r\n            elemImg.src = product.image; \r\n            elemImg.alt = \"image\";\r\n\r\n            let elemDesc = document.createElement(\"div\");\r\n            elemDesc.className = \"main__items__item--description\";\r\n            elemDesc.textContent = product.description;\r\n\r\n            let elemBut = document.createElement(\"input\");\r\n            elemBut.type = \"button\";\r\n            elemBut.className = \"main__items__item--button\";\r\n            elemBut.value = \"Add to basket\";\r\n\r\n            elemProd.appendChild(elemTit);\r\n            elemProd.appendChild(elemImg);\r\n            elemProd.appendChild(elemDesc);\r\n            elemProd.appendChild(elemBut);\r\n            \r\n            let mainItems = document.querySelector(\".main__items\");\r\n            mainItems.appendChild(elemProd);                \r\n        }   \r\n    },\r\n\r\n    AddEventsOnCategories: function(){\r\n\r\n        let navReferences = document.getElementsByClassName(\"nav__ref--category\");\r\n\r\n        for (let i = 0; i < navReferences.length; i++) {\r\n            const element = navReferences[i];\r\n            element.addEventListener(\"click\", this.showProductsInCategory);     \r\n        }\r\n    },\r\n\r\n    AddEventsOnAddToBasket: function(){\r\n        _mainAddToBasket_js__WEBPACK_IMPORTED_MODULE_0__.ButtonAdding.addEvents();\r\n    },\r\n\r\n    getBasketCount: function() {\r\n        return this.products.length;\r\n    },\r\n\r\n    getAllProductsInStore: () => {\r\n        let products = JSON.parse(localStorage.getItem(\"products\"));\r\n        if(products === null)\r\n        {\r\n            products = [];\r\n        }\r\n        return products;\r\n    },\r\n\r\n    getInitialListOfProducts: function(){\r\n\r\n        let products = [\r\n            { tittle: \"Xiaomi Mi 10T\", category: App.productCategories[0], description: \"Smartphone, 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Grigio (Lunar Silver)\", image: \"Images/mi10t5g.jpg\"},\r\n            { tittle: \"Xiaomi Redmi Note 10 Pro\", category: App.productCategories[0], description: \"Smartphone, 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version No Warranty (Onyx Gray)\", image: \"Images/redminote10pro.jpg\"},\r\n            { tittle: \"Xiaomi Mi Band 6\", category: App.productCategories[1], description: \"Activity Tracker High-Res 1.56 AMOLED Screen, SpO2 Monitor, 30 Sports Modes, 24HR Heart Rate and Sleep Monitor Smart Watch\", image: \"Images/miband6activity.jpg\"},\r\n            { tittle: \"Amazfit Smart Watch\", category: App.productCategories[1], description: \"Fitness Tracker for Men Women with 60+ Sports Modes, 9-Day Battery Life, Blood Oxygen Breathing Heart Rate Sleep Monitor, 5 ATM Waterproof, for iPhone Android Phone (Black)\", image: \"Images/AmazfitBipUSmartWatch.jpg\"},\r\n            { tittle: \"Withings Steel HR\", category: App.productCategories[1], description: \"Hybrid Smartwatch - Activity, Sleep, Fitness and Heart Rate Tracker with Connected GPS\", image: \"Images/WithingsSteelHRHybridSmartwatch.jpg\"},\r\n            { tittle: \"Razer Viper Ultimate\", category: App.productCategories[2], description: \"Lightest Wireless Gaming Mouse: Fastest Gaming Switches - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery - Classic Black\", image: \"Images/RazerViperUltimate.jpg\"},\r\n            { tittle: \"LED Wireless Mouse\", category: App.productCategories[2], description: \"Rechargeable Slim Silent Mouse 2.4G Portable Mobile Optical Office Mouse with USB & Type-c Receiver, 3 Adjustable DPI for Notebook, PC, Laptop, Computer, Desktop (Black)\", image: \"Images/LEDWirelessMouse.jpg\"},\r\n            { tittle: \"Perixx11568 Perimice\", category: App.productCategories[2], description: \"Wireless Trackball Mouse, Build-in 1.34 Inch Trackball with Pointing Feature, 5 Programmable Buttons, 2 DPI Level, Black\", image: \"Images/Perix11568Perimice-717.jpg\"},\r\n        ]\r\n\r\n        return products;\r\n    },\r\n\r\n    initializeNewStorage: function(products){\r\n        localStorage.setItem(\"products\", JSON.stringify(products));\r\n    },\r\n\r\n    showProductsInCategory: function(e){\r\n        const catId = e.target.id;\r\n        let categoryFilter = catId.substring(3);    \r\n        App.UpdateListOfProductsOnMainPage(categoryFilter);\r\n    },\r\n\r\n    cleanListOfProductsOnPage(){\r\n        var mainElem = document.querySelector(\".main__items\");\r\n        let products = document.getElementsByClassName(\"main__items__item\");\r\n        const length = products.length;\r\n        \r\n        for (let i = 0; i < length; i++) {\r\n            let element = products[0];\r\n            mainElem.removeChild(element);\r\n        }\r\n    },\r\n\r\n}\r\n\r\nApp.Main();\r\n\r\nconsole.log(\"main.js is loaded.\")\n\n//# sourceURL=webpack:///./modules/main.js?");

/***/ }),

/***/ "./modules/mainAddToBasket.js":
/*!************************************!*\
  !*** ./modules/mainAddToBasket.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonAdding\": () => (/* binding */ ButtonAdding)\n/* harmony export */ });\n/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.js */ \"./modules/basket.js\");\n\r\n\r\n\r\n\r\nconst ButtonAdding = {\r\n    \r\n    addNewProduct: (e) => {\r\n        let product = {};\r\n        let products = [];\r\n        let length = 0;\r\n        let elem = e.target;\r\n\r\n        elem.value = \"Added\";\r\n        elem.style.color = \"#4caf50\";\r\n        elem.style.fontStyle = \"italic\";\r\n        elem.style.fontWeight = \"bold\";\r\n        // var elem = document.querySelector(\".main__items__item--button\");  \r\n        \r\n        product.tittle = e.target.parentElement.children[0].textContent;\r\n        product.description = e.target.parentElement.children[2].textContent;\r\n\r\n        let storedPproducts = JSON.parse(sessionStorage.getItem(\"products\"));\r\n        if(storedPproducts !== null)\r\n        {\r\n            products = storedPproducts;\r\n            length = storedPproducts.length;\r\n        }\r\n        \r\n        products[length] = product;\r\n        sessionStorage.setItem(\"products\", JSON.stringify(products));\r\n        (0,_basket_js__WEBPACK_IMPORTED_MODULE_0__.UpdateBasketCountIcon)();\r\n\r\n        console.log(\"Added product:\\n\" + product.tittle + \"\\n\" + product.description);\r\n    },\r\n\r\n    addEvents: () => {\r\n        let addingButtons = document.getElementsByClassName(\"main__items__item--button\");\r\n\r\n        for (let i = 0; i < addingButtons.length; i++) {\r\n            const element = addingButtons[i];\r\n            element.addEventListener(\"click\", ButtonAdding.addNewProduct);     \r\n        }\r\n    },\r\n}\n\n//# sourceURL=webpack:///./modules/mainAddToBasket.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./modules/main.js");
/******/ 	
/******/ })()
;