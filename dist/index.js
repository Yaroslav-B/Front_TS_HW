/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/basket.ts":
/*!***************************!*\
  !*** ./modules/basket.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBasketCountIcon = void 0;
const Basket = {
    length: 0,
    UpdateBasketPage: () => {
        let page = "";
        page = location.href.split("/").slice(-1).toString();
        if (!page.includes("basket")) {
            return;
        }
        (0, exports.UpdateBasketCountIcon)();
        let products = Basket.getAddedProducts();
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                const product = products[i];
                let elemProd = document.createElement("div");
                elemProd.className = "main__items__product";
                let elemTit = document.createElement("div");
                elemTit.className = "main__items__product--tittle";
                elemTit.textContent = product.tittle;
                let elemDesc = document.createElement("div");
                elemDesc.className = "main__items__product--description";
                elemDesc.textContent = product.description;
                let elemSt = document.createElement("div");
                elemSt.className = "main__items__product--status";
                elemSt.textContent = "new!";
                elemProd.appendChild(elemTit);
                elemProd.appendChild(elemDesc);
                elemProd.appendChild(elemSt);
                let mainItems = document.querySelector(".basket__items");
                mainItems.appendChild(elemProd);
            }
        }
    },
    getAddedProducts: () => {
        let jsonProd = localStorage.getItem("products");
        if (jsonProd == null) {
            jsonProd = "";
        }
        let products = JSON.parse(jsonProd);
        if (products === null) {
            products = [];
        }
        length = products.length;
        return products;
    },
};
const UpdateBasketCountIcon = () => {
    let jsonProd = localStorage.getItem("products");
    if (jsonProd == null) {
        jsonProd = "";
    }
    let prods = JSON.parse(jsonProd);
    let elem = document.querySelector(".header__basket--counter");
    let count = 0;
    if (prods !== null) {
        count = prods.length;
    }
    elem.textContent = count;
};
exports.UpdateBasketCountIcon = UpdateBasketCountIcon;
Basket.UpdateBasketPage();


/***/ }),

/***/ "./modules/mainAddToBasket.ts":
/*!************************************!*\
  !*** ./modules/mainAddToBasket.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonAdding = void 0;
const basket_1 = __webpack_require__(/*! ./basket */ "./modules/basket.ts");
exports.ButtonAdding = {
    addNewProduct: function (e) {
        let product = {
            tittle: "",
            description: "",
            image: "",
            category: "",
        };
        let products = [];
        let length = 0;
        let elem = this;
        elem.nodeValue = "Added";
        elem.style.color = "#4caf50";
        elem.style.fontStyle = "italic";
        elem.style.fontWeight = "bold";
        // var elem = document.querySelector(".main__items__item--button");  
        product.tittle = elem.parentElement.children[0].textContent;
        product.description = elem.parentElement.children[2].textContent;
        let jsonProd = localStorage.getItem("products");
        if (jsonProd == null) {
            jsonProd = "";
        }
        let storedPproducts = JSON.parse(jsonProd);
        if (storedPproducts !== null) {
            products = storedPproducts;
            length = storedPproducts.length;
        }
        products[length] = product;
        sessionStorage.setItem("products", JSON.stringify(products));
        (0, basket_1.UpdateBasketCountIcon)();
        console.log("Added product:\n" + product.tittle + "\n" + product.description);
    },
    addEvents: () => {
        let addingButtons = document.getElementsByClassName("main__items__item--button");
        for (let i = 0; i < addingButtons.length; i++) {
            const element = addingButtons[i];
            element.addEventListener("click", exports.ButtonAdding.addNewProduct);
        }
    },
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./modules/main.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log("main.js is loading...");
const mainAddToBasket_1 = __webpack_require__(/*! ./mainAddToBasket */ "./modules/mainAddToBasket.ts");
const basket_1 = __webpack_require__(/*! ./basket */ "./modules/basket.ts");
const App = {
    product: {
        tittle: "",
        description: "",
        image: "",
        category: "",
    },
    products: [],
    productCategories: [
        "Smartphones",
        "SmartWatches",
        "ComputerMouses",
        "Others",
    ],
    Main: function () {
        this.UpdateListOfProductsOnMainPage();
        this.AddEventsOnCategories();
        this.UpdateMainPage();
    },
    UpdateMainPage: function () {
        this.AddEventsOnAddToBasket();
        (0, basket_1.UpdateBasketCountIcon)();
    },
    UpdateListOfProductsOnMainPage: function (categoryFilter) {
        let allProducts = this.getAllProductsInStore();
        let length = allProducts.length;
        if (length < 1) {
            allProducts = this.getInitialListOfProducts();
            length = allProducts.length;
            this.initializeNewStorage(allProducts);
        }
        if (categoryFilter != null) {
            App.cleanListOfProductsOnPage();
            let filteredProducts = [];
            filteredProducts = allProducts.filter(p => p.category == categoryFilter);
            allProducts = filteredProducts;
            length = allProducts.length;
        }
        for (let i = 0; i < length; i++) {
            const product = allProducts[i];
            let elemProd = document.createElement("div");
            elemProd.className = "main__items__item";
            let elemTit = document.createElement("div");
            elemTit.className = "main__items__item--tittle";
            elemTit.textContent = product.tittle;
            let elemImg = document.createElement("img");
            elemImg.className = "main__items__item--image";
            elemImg.src = product.image;
            elemImg.alt = "image";
            let elemDesc = document.createElement("div");
            elemDesc.className = "main__items__item--description";
            elemDesc.textContent = product.description;
            let elemBut = document.createElement("input");
            elemBut.type = "button";
            elemBut.className = "main__items__item--button";
            elemBut.value = "Add to basket";
            elemProd.appendChild(elemTit);
            elemProd.appendChild(elemImg);
            elemProd.appendChild(elemDesc);
            elemProd.appendChild(elemBut);
            let mainItems = document.querySelector(".main__items");
            mainItems.appendChild(elemProd);
        }
    },
    AddEventsOnCategories: function () {
        let navReferences = document.getElementsByClassName("nav__ref--category");
        for (let i = 0; i < navReferences.length; i++) {
            const element = navReferences[i];
            element.addEventListener("click", this.showProductsInCategory);
        }
    },
    AddEventsOnAddToBasket: function () {
        mainAddToBasket_1.ButtonAdding.addEvents();
    },
    getBasketCount: function () {
        return this.products.length;
    },
    getAllProductsInStore: () => {
        let jsonProd = localStorage.getItem("products");
        if (jsonProd == null) {
            jsonProd = "";
        }
        let products = JSON.parse(jsonProd);
        if (products === null) {
            products = [];
        }
        return products;
    },
    getInitialListOfProducts: function () {
        let products = [
            { tittle: "Xiaomi Mi 10T", category: App.productCategories[0], description: "Smartphone, 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Grigio (Lunar Silver)", image: "Images/mi10t5g.jpg" },
            { tittle: "Xiaomi Redmi Note 10 Pro", category: App.productCategories[0], description: "Smartphone, 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version No Warranty (Onyx Gray)", image: "Images/redminote10pro.jpg" },
            { tittle: "Xiaomi Mi Band 6", category: App.productCategories[1], description: "Activity Tracker High-Res 1.56 AMOLED Screen, SpO2 Monitor, 30 Sports Modes, 24HR Heart Rate and Sleep Monitor Smart Watch", image: "Images/miband6activity.jpg" },
            { tittle: "Amazfit Smart Watch", category: App.productCategories[1], description: "Fitness Tracker for Men Women with 60+ Sports Modes, 9-Day Battery Life, Blood Oxygen Breathing Heart Rate Sleep Monitor, 5 ATM Waterproof, for iPhone Android Phone (Black)", image: "Images/AmazfitBipUSmartWatch.jpg" },
            { tittle: "Withings Steel HR", category: App.productCategories[1], description: "Hybrid Smartwatch - Activity, Sleep, Fitness and Heart Rate Tracker with Connected GPS", image: "Images/WithingsSteelHRHybridSmartwatch.jpg" },
            { tittle: "Razer Viper Ultimate", category: App.productCategories[2], description: "Lightest Wireless Gaming Mouse: Fastest Gaming Switches - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery - Classic Black", image: "Images/RazerViperUltimate.jpg" },
            { tittle: "LED Wireless Mouse", category: App.productCategories[2], description: "Rechargeable Slim Silent Mouse 2.4G Portable Mobile Optical Office Mouse with USB & Type-c Receiver, 3 Adjustable DPI for Notebook, PC, Laptop, Computer, Desktop (Black)", image: "Images/LEDWirelessMouse.jpg" },
            { tittle: "Perixx11568 Perimice", category: App.productCategories[2], description: "Wireless Trackball Mouse, Build-in 1.34 Inch Trackball with Pointing Feature, 5 Programmable Buttons, 2 DPI Level, Black", image: "Images/Perix11568Perimice-717.jpg" },
        ];
        return products;
    },
    initializeNewStorage: function (products) {
        localStorage.setItem("products", JSON.stringify(products));
    },
    showProductsInCategory: function (e) {
        const catId = this.id;
        let categoryFilter = catId.substring(3);
        App.UpdateListOfProductsOnMainPage(categoryFilter);
        App.UpdateMainPage();
    },
    cleanListOfProductsOnPage() {
        var mainElem = document.querySelector(".main__items");
        let products = document.getElementsByClassName("main__items__item");
        const length = products.length;
        for (let i = 0; i < length; i++) {
            let element = products[0];
            mainElem.removeChild(element);
        }
    },
};
App.Main();
console.log("main.js is loaded.");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsUUFBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FFSjtBQUVELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhc2tldC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21haW5BZGRUb0Jhc2tldC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgQmFza2V0ID0ge1xyXG4gICAgbGVuZ3RoOiAwLFxyXG5cclxuICAgIFVwZGF0ZUJhc2tldFBhZ2U6ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHBhZ2UgPSBcIlwiO1xyXG4gICAgICAgIHBhZ2UgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KFwiL1wiKS5zbGljZSgtMSkudG9TdHJpbmcoKTsgXHJcbiAgICAgICAgaWYoIXBhZ2UuaW5jbHVkZXMoXCJiYXNrZXRcIikpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXBkYXRlQmFza2V0Q291bnRJY29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gQmFza2V0LmdldEFkZGVkUHJvZHVjdHMoKTtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1Qcm9kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGVsZW1Qcm9kLmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX3Byb2R1Y3RcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbVRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBlbGVtVGl0LmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX3Byb2R1Y3QtLXRpdHRsZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxlbVRpdC50ZXh0Q29udGVudCA9IHByb2R1Y3QudGl0dGxlOyBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbURlc2MuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19fcHJvZHVjdC0tZGVzY3JpcHRpb25cIjtcclxuICAgICAgICAgICAgICAgIGVsZW1EZXNjLnRleHRDb250ZW50ID0gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbVN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGVsZW1TdC5jbGFzc05hbWUgPSBcIm1haW5fX2l0ZW1zX19wcm9kdWN0LS1zdGF0dXNcIjtcclxuICAgICAgICAgICAgICAgIGVsZW1TdC50ZXh0Q29udGVudCA9IFwibmV3IVwiXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbVByb2QuYXBwZW5kQ2hpbGQoZWxlbVRpdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtRGVzYyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtU3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbWFpbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2l0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgbWFpbkl0ZW1zIS5hcHBlbmRDaGlsZChlbGVtUHJvZCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFkZGVkUHJvZHVjdHM6ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGpzb25Qcm9kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKTtcclxuICAgICAgICBpZihqc29uUHJvZCA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAganNvblByb2QgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShqc29uUHJvZCk7XHJcblxyXG4gICAgICAgIGlmKHByb2R1Y3RzID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVuZ3RoID0gcHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVCYXNrZXRDb3VudEljb24gPSAoKSA9PiB7XHJcbiAgICBsZXQganNvblByb2QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGlmKGpzb25Qcm9kID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBqc29uUHJvZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGxldCBwcm9kcyA9IEpTT04ucGFyc2UoanNvblByb2QpO1xyXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYmFza2V0LS1jb3VudGVyXCIpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGlmKHByb2RzICE9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGNvdW50ID0gcHJvZHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgZWxlbSEudGV4dENvbnRlbnQgPSBjb3VudCBhcyB1bmtub3duIGFzIHN0cmluZztcclxufSAgXHJcblxyXG5CYXNrZXQuVXBkYXRlQmFza2V0UGFnZSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7VXBkYXRlQmFza2V0Q291bnRJY29ufSBmcm9tICcuL2Jhc2tldCc7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQWRkaW5nID0ge1xyXG4gICAgXHJcbiAgICBhZGROZXdQcm9kdWN0OiBmdW5jdGlvbih0aGlzOiBIVE1MRWxlbWVudCwgZSA6IEV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgIHRpdHRsZTogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xyXG4gICAgICAgIGxldCBlbGVtID0gdGhpcztcclxuXHJcbiAgICAgICAgZWxlbS5ub2RlVmFsdWUgPSBcIkFkZGVkXCI7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IFwiIzRjYWY1MFwiO1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICBlbGVtLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAvLyB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbXNfX2l0ZW0tLWJ1dHRvblwiKTsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2R1Y3QudGl0dGxlID0gZWxlbS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlblswXS50ZXh0Q29udGVudCE7XHJcbiAgICAgICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IGVsZW0ucGFyZW50RWxlbWVudCEuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQhO1xyXG5cclxuICAgICAgICBsZXQganNvblByb2QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGlmKGpzb25Qcm9kID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBqc29uUHJvZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdG9yZWRQcHJvZHVjdHMgPSBKU09OLnBhcnNlKGpzb25Qcm9kKTtcclxuICAgICAgICBpZihzdG9yZWRQcHJvZHVjdHMgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyA9IHN0b3JlZFBwcm9kdWN0cztcclxuICAgICAgICAgICAgbGVuZ3RoID0gc3RvcmVkUHByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZHVjdHNbbGVuZ3RoXSA9IHByb2R1Y3Q7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSk7XHJcbiAgICAgICAgVXBkYXRlQmFza2V0Q291bnRJY29uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgcHJvZHVjdDpcXG5cIiArIHByb2R1Y3QudGl0dGxlICsgXCJcXG5cIiArIHByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRFdmVudHM6ICgpID0+IHtcclxuICAgICAgICBsZXQgYWRkaW5nQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluX19pdGVtc19faXRlbS0tYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGluZ0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFkZGluZ0J1dHRvbnNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEJ1dHRvbkFkZGluZy5hZGROZXdQcm9kdWN0KTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zb2xlLmxvZyhcIm1haW4uanMgaXMgbG9hZGluZy4uLlwiKTtcclxuXHJcbmltcG9ydCB7QnV0dG9uQWRkaW5nfSBmcm9tICcuL21haW5BZGRUb0Jhc2tldCc7XHJcbmltcG9ydCB7VXBkYXRlQmFza2V0Q291bnRJY29ufSBmcm9tICcuL2Jhc2tldCc7XHJcblxyXG50eXBlIHByb2R1Y3QgPSB7XHJcbiAgICB0aXR0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXBwID0ge1xyXG4gICAgcHJvZHVjdDoge1xyXG4gICAgICAgIHRpdHRsZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0czogW10sXHJcblxyXG4gICAgcHJvZHVjdENhdGVnb3JpZXM6IFtcclxuICAgICAgICBcIlNtYXJ0cGhvbmVzXCIsXHJcbiAgICAgICAgXCJTbWFydFdhdGNoZXNcIixcclxuICAgICAgICBcIkNvbXB1dGVyTW91c2VzXCIsXHJcbiAgICAgICAgXCJPdGhlcnNcIixcclxuICAgIF0sXHJcblxyXG4gICAgTWFpbjogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdGhpcy5VcGRhdGVMaXN0T2ZQcm9kdWN0c09uTWFpblBhZ2UoKTsgICAgXHJcbiAgICAgICAgdGhpcy5BZGRFdmVudHNPbkNhdGVnb3JpZXMoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZU1haW5QYWdlKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBVcGRhdGVNYWluUGFnZTogZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgdGhpcy5BZGRFdmVudHNPbkFkZFRvQmFza2V0KCk7XHJcbiAgICAgICAgVXBkYXRlQmFza2V0Q291bnRJY29uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFVwZGF0ZUxpc3RPZlByb2R1Y3RzT25NYWluUGFnZTogZnVuY3Rpb24oY2F0ZWdvcnlGaWx0ZXI/OiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBhbGxQcm9kdWN0czogcHJvZHVjdFtdID0gdGhpcy5nZXRBbGxQcm9kdWN0c0luU3RvcmUoKVxyXG4gICAgICAgIGxldCBsZW5ndGggPSBhbGxQcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgaWYobGVuZ3RoIDwgMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsbFByb2R1Y3RzID0gdGhpcy5nZXRJbml0aWFsTGlzdE9mUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgbGVuZ3RoID0gYWxsUHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVOZXdTdG9yYWdlKGFsbFByb2R1Y3RzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2F0ZWdvcnlGaWx0ZXIgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFwcC5jbGVhbkxpc3RPZlByb2R1Y3RzT25QYWdlKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdHMgPSBhbGxQcm9kdWN0cy5maWx0ZXIocCA9PiBwLmNhdGVnb3J5ID09IGNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgICAgICAgYWxsUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzO1xyXG4gICAgICAgICAgICBsZW5ndGggPSBhbGxQcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBlbGVtUHJvZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGVsZW1Qcm9kLmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX2l0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtVGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZWxlbVRpdC5jbGFzc05hbWUgPSBcIm1haW5fX2l0ZW1zX19pdGVtLS10aXR0bGVcIjtcclxuICAgICAgICAgICAgZWxlbVRpdC50ZXh0Q29udGVudCA9IHByb2R1Y3QudGl0dGxlOyBcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgZWxlbUltZy5jbGFzc05hbWUgPSBcIm1haW5fX2l0ZW1zX19pdGVtLS1pbWFnZVwiO1xyXG4gICAgICAgICAgICBlbGVtSW1nLnNyYyA9IHByb2R1Y3QuaW1hZ2U7IFxyXG4gICAgICAgICAgICBlbGVtSW1nLmFsdCA9IFwiaW1hZ2VcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGVsZW1EZXNjLmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX2l0ZW0tLWRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgICAgIGVsZW1EZXNjLnRleHRDb250ZW50ID0gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtQnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBlbGVtQnV0LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgICAgICBlbGVtQnV0LmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX2l0ZW0tLWJ1dHRvblwiO1xyXG4gICAgICAgICAgICBlbGVtQnV0LnZhbHVlID0gXCJBZGQgdG8gYmFza2V0XCI7XHJcblxyXG4gICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtVGl0KTtcclxuICAgICAgICAgICAgZWxlbVByb2QuYXBwZW5kQ2hpbGQoZWxlbUltZyk7XHJcbiAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1EZXNjKTtcclxuICAgICAgICAgICAgZWxlbVByb2QuYXBwZW5kQ2hpbGQoZWxlbUJ1dCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbWFpbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pdGVtc1wiKTtcclxuICAgICAgICAgICAgbWFpbkl0ZW1zIS5hcHBlbmRDaGlsZChlbGVtUHJvZCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICBcclxuICAgIH0sXHJcblxyXG4gICAgQWRkRXZlbnRzT25DYXRlZ29yaWVzOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBsZXQgbmF2UmVmZXJlbmNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX3JlZi0tY2F0ZWdvcnlcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2UmVmZXJlbmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbmF2UmVmZXJlbmNlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93UHJvZHVjdHNJbkNhdGVnb3J5KTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQWRkRXZlbnRzT25BZGRUb0Jhc2tldDogZnVuY3Rpb24oKXtcclxuICAgICAgICBCdXR0b25BZGRpbmcuYWRkRXZlbnRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEJhc2tldENvdW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFsbFByb2R1Y3RzSW5TdG9yZTogKCkgPT4ge1xyXG4gICAgICAgIGxldCBqc29uUHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgaWYoanNvblByb2QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpzb25Qcm9kID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShqc29uUHJvZCk7XHJcbiAgICAgICAgaWYocHJvZHVjdHMgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEluaXRpYWxMaXN0T2ZQcm9kdWN0czogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW1xyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJYaWFvbWkgTWkgMTBUXCIsIGNhdGVnb3J5OiBBcHAucHJvZHVjdENhdGVnb3JpZXNbMF0sIGRlc2NyaXB0aW9uOiBcIlNtYXJ0cGhvbmUsIDYgR0IgKyAxMjggR0IsIER1YWwgU2ltLCBBbGV4YSBIYW5kcy1GcmVlLCBHcmlnaW8gKEx1bmFyIFNpbHZlcilcIiwgaW1hZ2U6IFwiSW1hZ2VzL21pMTB0NWcuanBnXCJ9LFxyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJYaWFvbWkgUmVkbWkgTm90ZSAxMCBQcm9cIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1swXSwgZGVzY3JpcHRpb246IFwiU21hcnRwaG9uZSwgNjRHQiBEdWFsIFNJTSwgR1NNIFVubG9ja2VkLCAoQ0RNQSBWZXJpem9uL1NwcmludCBOb3QgU3VwcG9ydGVkKSBTbWFydHBob25lIEludGVybmF0aW9uYWwgVmVyc2lvbiBObyBXYXJyYW50eSAoT255eCBHcmF5KVwiLCBpbWFnZTogXCJJbWFnZXMvcmVkbWlub3RlMTBwcm8uanBnXCJ9LFxyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJYaWFvbWkgTWkgQmFuZCA2XCIsIGNhdGVnb3J5OiBBcHAucHJvZHVjdENhdGVnb3JpZXNbMV0sIGRlc2NyaXB0aW9uOiBcIkFjdGl2aXR5IFRyYWNrZXIgSGlnaC1SZXMgMS41NiBBTU9MRUQgU2NyZWVuLCBTcE8yIE1vbml0b3IsIDMwIFNwb3J0cyBNb2RlcywgMjRIUiBIZWFydCBSYXRlIGFuZCBTbGVlcCBNb25pdG9yIFNtYXJ0IFdhdGNoXCIsIGltYWdlOiBcIkltYWdlcy9taWJhbmQ2YWN0aXZpdHkuanBnXCJ9LFxyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJBbWF6Zml0IFNtYXJ0IFdhdGNoXCIsIGNhdGVnb3J5OiBBcHAucHJvZHVjdENhdGVnb3JpZXNbMV0sIGRlc2NyaXB0aW9uOiBcIkZpdG5lc3MgVHJhY2tlciBmb3IgTWVuIFdvbWVuIHdpdGggNjArIFNwb3J0cyBNb2RlcywgOS1EYXkgQmF0dGVyeSBMaWZlLCBCbG9vZCBPeHlnZW4gQnJlYXRoaW5nIEhlYXJ0IFJhdGUgU2xlZXAgTW9uaXRvciwgNSBBVE0gV2F0ZXJwcm9vZiwgZm9yIGlQaG9uZSBBbmRyb2lkIFBob25lIChCbGFjaylcIiwgaW1hZ2U6IFwiSW1hZ2VzL0FtYXpmaXRCaXBVU21hcnRXYXRjaC5qcGdcIn0sXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIldpdGhpbmdzIFN0ZWVsIEhSXCIsIGNhdGVnb3J5OiBBcHAucHJvZHVjdENhdGVnb3JpZXNbMV0sIGRlc2NyaXB0aW9uOiBcIkh5YnJpZCBTbWFydHdhdGNoIC0gQWN0aXZpdHksIFNsZWVwLCBGaXRuZXNzIGFuZCBIZWFydCBSYXRlIFRyYWNrZXIgd2l0aCBDb25uZWN0ZWQgR1BTXCIsIGltYWdlOiBcIkltYWdlcy9XaXRoaW5nc1N0ZWVsSFJIeWJyaWRTbWFydHdhdGNoLmpwZ1wifSxcclxuICAgICAgICAgICAgeyB0aXR0bGU6IFwiUmF6ZXIgVmlwZXIgVWx0aW1hdGVcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1syXSwgZGVzY3JpcHRpb246IFwiTGlnaHRlc3QgV2lyZWxlc3MgR2FtaW5nIE1vdXNlOiBGYXN0ZXN0IEdhbWluZyBTd2l0Y2hlcyAtIDIwSyBEUEkgT3B0aWNhbCBTZW5zb3IgLSBDaHJvbWEgTGlnaHRpbmcgLSA4IFByb2dyYW1tYWJsZSBCdXR0b25zIC0gNzAgSHIgQmF0dGVyeSAtIENsYXNzaWMgQmxhY2tcIiwgaW1hZ2U6IFwiSW1hZ2VzL1JhemVyVmlwZXJVbHRpbWF0ZS5qcGdcIn0sXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIkxFRCBXaXJlbGVzcyBNb3VzZVwiLCBjYXRlZ29yeTogQXBwLnByb2R1Y3RDYXRlZ29yaWVzWzJdLCBkZXNjcmlwdGlvbjogXCJSZWNoYXJnZWFibGUgU2xpbSBTaWxlbnQgTW91c2UgMi40RyBQb3J0YWJsZSBNb2JpbGUgT3B0aWNhbCBPZmZpY2UgTW91c2Ugd2l0aCBVU0IgJiBUeXBlLWMgUmVjZWl2ZXIsIDMgQWRqdXN0YWJsZSBEUEkgZm9yIE5vdGVib29rLCBQQywgTGFwdG9wLCBDb21wdXRlciwgRGVza3RvcCAoQmxhY2spXCIsIGltYWdlOiBcIkltYWdlcy9MRURXaXJlbGVzc01vdXNlLmpwZ1wifSxcclxuICAgICAgICAgICAgeyB0aXR0bGU6IFwiUGVyaXh4MTE1NjggUGVyaW1pY2VcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1syXSwgZGVzY3JpcHRpb246IFwiV2lyZWxlc3MgVHJhY2tiYWxsIE1vdXNlLCBCdWlsZC1pbiAxLjM0IEluY2ggVHJhY2tiYWxsIHdpdGggUG9pbnRpbmcgRmVhdHVyZSwgNSBQcm9ncmFtbWFibGUgQnV0dG9ucywgMiBEUEkgTGV2ZWwsIEJsYWNrXCIsIGltYWdlOiBcIkltYWdlcy9QZXJpeDExNTY4UGVyaW1pY2UtNzE3LmpwZ1wifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZU5ld1N0b3JhZ2U6IGZ1bmN0aW9uKHByb2R1Y3RzOiBwcm9kdWN0W10pe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Byb2R1Y3RzSW5DYXRlZ29yeTogZnVuY3Rpb24odGhpczogSFRNTEVsZW1lbnQsIGUgOiBFdmVudCl7XHJcbiAgICAgICAgY29uc3QgY2F0SWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeUZpbHRlciA9IGNhdElkLnN1YnN0cmluZygzKTsgICAgXHJcbiAgICAgICAgQXBwLlVwZGF0ZUxpc3RPZlByb2R1Y3RzT25NYWluUGFnZShjYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgICAgQXBwLlVwZGF0ZU1haW5QYWdlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFuTGlzdE9mUHJvZHVjdHNPblBhZ2UoKXtcclxuICAgICAgICB2YXIgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2l0ZW1zXCIpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluX19pdGVtc19faXRlbVwiKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHByb2R1Y3RzWzBdO1xyXG4gICAgICAgICAgICBtYWluRWxlbSEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcbkFwcC5NYWluKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIm1haW4uanMgaXMgbG9hZGVkLlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==