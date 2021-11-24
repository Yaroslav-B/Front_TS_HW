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

/***/ "./modules/addNewProduct.js":
/*!**********************************!*\
  !*** ./modules/addNewProduct.js ***!
  \**********************************/
/***/ (() => {

eval("\r\n\r\nconsole.log(\"addNewProduct.js is loading...\");\r\n\r\nconst AddingNewProductToStore = {\r\n    \r\n    addEvents: function(){\r\n        let elemAdd = document.querySelector(\".btn-block_add\"); \r\n        elemAdd.addEventListener(\"click\", this.addNewProduct);     \r\n        \r\n        let elemRes = document.querySelector(\".btn-block_resset\");\r\n        elemRes.addEventListener(\"click\", this.resetForm);\r\n    },\r\n    \r\n    addNewProduct: function(e){\r\n        let form = document.addingNewProductForm;\r\n        let product = {};\r\n        let products = [];\r\n        product.tittle = form.tittle.value;\r\n        product.description = form.description.value;\r\n        product.image = form.ImageUrl.value;\r\n        product.category = form.category.value;\r\n\r\n        if(product.tittle == \"\" || product.description == \"\")\r\n        {\r\n            // e.preventDefault()\r\n            return;\r\n        }\r\n        if(product.image == \"\")\r\n        {\r\n            product.image = \"Service/noImage.png\";\r\n        }\r\n\r\n        let storedPproducts = JSON.parse(localStorage.getItem(\"products\"));\r\n        if(storedPproducts !== null)\r\n        {\r\n            products = storedPproducts;        \r\n        }\r\n        let index = products.length;\r\n        products[index] = product;\r\n        localStorage.setItem(\"products\", JSON.stringify(products));\r\n\r\n        console.log(\"Added new product: \\n\" + form.tittle.value +\"\\n\" + form.description.value);\r\n    },\r\n\r\n    resetForm: function(){\r\n        //tbd\r\n    }\r\n    \r\n    \r\n}\r\n\r\nAddingNewProductToStore.addEvents();\r\n\r\nconsole.log(\"addNewProduct.js is loaded.\");\n\n//# sourceURL=webpack:///./modules/addNewProduct.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./modules/addNewProduct.js"]();
/******/ 	
/******/ })()
;