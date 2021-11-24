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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7OztBQUViLE1BQU0sTUFBTSxHQUFHO0lBQ1gsTUFBTSxFQUFFLENBQUM7SUFFVCxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JELElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUMzQjtZQUNJLE9BQU87U0FDVjtRQUVELGlDQUFxQixHQUFFLENBQUM7UUFFeEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFekMsSUFBRyxNQUFNLEdBQUcsQ0FBQyxFQUNiO1lBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU1QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO2dCQUU1QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO2dCQUNuRCxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBRXJDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsbUNBQW1DLENBQUM7Z0JBQ3pELFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFFM0MsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNO2dCQUUzQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUU3QixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELFNBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFFRCxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQ25CO1lBQ0ksUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEMsSUFBRyxRQUFRLEtBQUssSUFBSSxFQUNwQjtZQUNJLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN6QixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFFTSxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtJQUN0QyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLElBQUcsUUFBUSxJQUFJLElBQUksRUFDbkI7UUFDSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ2pCO0lBRUwsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDOUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBRyxLQUFLLEtBQUssSUFBSSxFQUNqQjtRQUNJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ3hCO0lBQ0QsSUFBSyxDQUFDLFdBQVcsR0FBRyxLQUEwQixDQUFDO0FBQ25ELENBQUM7QUFmWSw2QkFBcUIseUJBZWpDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7Ozs7Ozs7O0FDcEZiOzs7QUFFYiw0RUFBK0M7QUFFbEMsb0JBQVksR0FBRztJQUV4QixhQUFhLEVBQUUsVUFBNEIsQ0FBUztRQUNoRCxJQUFJLE9BQU8sR0FBRztZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsV0FBVyxFQUFFLEVBQUU7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUNGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDL0IscUVBQXFFO1FBRXJFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBWSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBWSxDQUFDO1FBRW5FLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBRyxRQUFRLElBQUksSUFBSSxFQUNuQjtZQUNJLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUcsZUFBZSxLQUFLLElBQUksRUFDM0I7WUFDSSxRQUFRLEdBQUcsZUFBZSxDQUFDO1lBQzNCLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ25DO1FBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMzQixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0Qsa0NBQXFCLEdBQUUsQ0FBQztRQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRWpGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG9CQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7VUNyREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTs7QUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFckMsdUdBQStDO0FBQy9DLDRFQUErQztBQVMvQyxNQUFNLEdBQUcsR0FBRztJQUNSLE9BQU8sRUFBRTtRQUNMLE1BQU0sRUFBRSxFQUFFO1FBQ1YsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxRQUFRLEVBQUUsRUFBRTtJQUVaLGlCQUFpQixFQUFFO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsUUFBUTtLQUNYO0lBRUQsSUFBSSxFQUFFO1FBRUYsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxjQUFjLEVBQUU7UUFDWixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixrQ0FBcUIsR0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBOEIsRUFBRSxVQUFTLGNBQXVCO1FBQzVELElBQUksV0FBVyxHQUFjLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtRQUN6RCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUcsTUFBTSxHQUFHLENBQUMsRUFDYjtZQUNJLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUM5QyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFHLGNBQWMsSUFBSSxJQUFJLEVBQ3pCO1lBQ0ksR0FBRyxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDaEMsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDMUIsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksY0FBYyxDQUFDLENBQUM7WUFDekUsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1lBQy9CLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQy9CO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1lBRXpDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUNoRCxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFFckMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUV0QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZ0NBQWdDLENBQUM7WUFDdEQsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBRTNDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDeEIsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUNoRCxPQUFPLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztZQUVoQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTlCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkQsU0FBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsRUFBRTtRQUVuQixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRCxzQkFBc0IsRUFBRTtRQUNwQiw4QkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7UUFDeEIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQ25CO1lBQ0ksUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBRyxRQUFRLEtBQUssSUFBSSxFQUNwQjtZQUNJLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQXdCLEVBQUU7UUFFdEIsSUFBSSxRQUFRLEdBQUc7WUFDWCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsOEVBQThFLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFDO1lBQ3hMLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLHVJQUF1SSxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBQztZQUNuUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSw0SEFBNEgsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUM7WUFDalAsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsOEtBQThLLEVBQUUsS0FBSyxFQUFFLGtDQUFrQyxFQUFDO1lBQzVTLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLHdGQUF3RixFQUFFLEtBQUssRUFBRSw0Q0FBNEMsRUFBQztZQUM5TixFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSw2SkFBNkosRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUM7WUFDelIsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsMktBQTJLLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFDO1lBQ25TLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLDBIQUEwSCxFQUFFLEtBQUssRUFBRSxtQ0FBbUMsRUFBQztTQUM3UDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxvQkFBb0IsRUFBRSxVQUFTLFFBQW1CO1FBQzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsc0JBQXNCLEVBQUUsVUFBNEIsQ0FBUztRQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUUvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixRQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztDQUVKO0FBRUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvYmFza2V0LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFpbkFkZFRvQmFza2V0LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBCYXNrZXQgPSB7XHJcbiAgICBsZW5ndGg6IDAsXHJcblxyXG4gICAgVXBkYXRlQmFza2V0UGFnZTogKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgcGFnZSA9IFwiXCI7XHJcbiAgICAgICAgcGFnZSA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKC0xKS50b1N0cmluZygpOyBcclxuICAgICAgICBpZighcGFnZS5pbmNsdWRlcyhcImJhc2tldFwiKSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVcGRhdGVCYXNrZXRDb3VudEljb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBCYXNrZXQuZ2V0QWRkZWRQcm9kdWN0cygpO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbVByb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbVByb2QuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19fcHJvZHVjdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtVGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGVsZW1UaXQuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19fcHJvZHVjdC0tdGl0dGxlXCI7XHJcbiAgICAgICAgICAgICAgICBlbGVtVGl0LnRleHRDb250ZW50ID0gcHJvZHVjdC50aXR0bGU7IFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBlbGVtRGVzYy5jbGFzc05hbWUgPSBcIm1haW5fX2l0ZW1zX19wcm9kdWN0LS1kZXNjcmlwdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgZWxlbURlc2MudGV4dENvbnRlbnQgPSBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtU3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbVN0LmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX3Byb2R1Y3QtLXN0YXR1c1wiO1xyXG4gICAgICAgICAgICAgICAgZWxlbVN0LnRleHRDb250ZW50ID0gXCJuZXchXCJcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtVGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1EZXNjKTtcclxuICAgICAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1TdCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBtYWluSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9faXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICBtYWluSXRlbXMhLmFwcGVuZENoaWxkKGVsZW1Qcm9kKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWRkZWRQcm9kdWN0czogKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQganNvblByb2QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGlmKGpzb25Qcm9kID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBqc29uUHJvZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGpzb25Qcm9kKTtcclxuXHJcbiAgICAgICAgaWYocHJvZHVjdHMgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZW5ndGggPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUJhc2tldENvdW50SWNvbiA9ICgpID0+IHtcclxuICAgIGxldCBqc29uUHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgaWYoanNvblByb2QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpzb25Qcm9kID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgbGV0IHByb2RzID0gSlNPTi5wYXJzZShqc29uUHJvZCk7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19iYXNrZXQtLWNvdW50ZXJcIik7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYocHJvZHMgIT09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgY291bnQgPSBwcm9kcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBlbGVtIS50ZXh0Q29udGVudCA9IGNvdW50IGFzIHVua25vd24gYXMgc3RyaW5nO1xyXG59ICBcclxuXHJcbkJhc2tldC5VcGRhdGVCYXNrZXRQYWdlKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtVcGRhdGVCYXNrZXRDb3VudEljb259IGZyb20gJy4vYmFza2V0JztcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25BZGRpbmcgPSB7XHJcbiAgICBcclxuICAgIGFkZE5ld1Byb2R1Y3Q6IGZ1bmN0aW9uKHRoaXM6IEhUTUxFbGVtZW50LCBlIDogRXZlbnQpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgdGl0dGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzO1xyXG5cclxuICAgICAgICBlbGVtLm5vZGVWYWx1ZSA9IFwiQWRkZWRcIjtcclxuICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gXCIjNGNhZjUwXCI7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIC8vIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pdGVtc19faXRlbS0tYnV0dG9uXCIpOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZHVjdC50aXR0bGUgPSBlbGVtLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ITtcclxuICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uID0gZWxlbS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgIGxldCBqc29uUHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgaWYoanNvblByb2QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpzb25Qcm9kID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0b3JlZFBwcm9kdWN0cyA9IEpTT04ucGFyc2UoanNvblByb2QpO1xyXG4gICAgICAgIGlmKHN0b3JlZFBwcm9kdWN0cyAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzID0gc3RvcmVkUHByb2R1Y3RzO1xyXG4gICAgICAgICAgICBsZW5ndGggPSBzdG9yZWRQcHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwcm9kdWN0c1tsZW5ndGhdID0gcHJvZHVjdDtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcclxuICAgICAgICBVcGRhdGVCYXNrZXRDb3VudEljb24oKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRlZCBwcm9kdWN0OlxcblwiICsgcHJvZHVjdC50aXR0bGUgKyBcIlxcblwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZEV2ZW50czogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhZGRpbmdCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW5fX2l0ZW1zX19pdGVtLS1idXR0b25cIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkaW5nQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYWRkaW5nQnV0dG9uc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQnV0dG9uQWRkaW5nLmFkZE5ld1Byb2R1Y3QpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwibWFpbi5qcyBpcyBsb2FkaW5nLi4uXCIpO1xyXG5cclxuaW1wb3J0IHtCdXR0b25BZGRpbmd9IGZyb20gJy4vbWFpbkFkZFRvQmFza2V0JztcclxuaW1wb3J0IHtVcGRhdGVCYXNrZXRDb3VudEljb259IGZyb20gJy4vYmFza2V0JztcclxuXHJcbnR5cGUgcHJvZHVjdCA9IHtcclxuICAgIHRpdHRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBcHAgPSB7XHJcbiAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgdGl0dGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuXHJcbiAgICBwcm9kdWN0Q2F0ZWdvcmllczogW1xyXG4gICAgICAgIFwiU21hcnRwaG9uZXNcIixcclxuICAgICAgICBcIlNtYXJ0V2F0Y2hlc1wiLFxyXG4gICAgICAgIFwiQ29tcHV0ZXJNb3VzZXNcIixcclxuICAgICAgICBcIk90aGVyc1wiLFxyXG4gICAgXSxcclxuXHJcbiAgICBNYWluOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB0aGlzLlVwZGF0ZUxpc3RPZlByb2R1Y3RzT25NYWluUGFnZSgpOyAgICBcclxuICAgICAgICB0aGlzLkFkZEV2ZW50c09uQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlTWFpblBhZ2UoKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIFVwZGF0ZU1haW5QYWdlOiBmdW5jdGlvbigpeyBcclxuICAgICAgICB0aGlzLkFkZEV2ZW50c09uQWRkVG9CYXNrZXQoKTtcclxuICAgICAgICBVcGRhdGVCYXNrZXRDb3VudEljb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgVXBkYXRlTGlzdE9mUHJvZHVjdHNPbk1haW5QYWdlOiBmdW5jdGlvbihjYXRlZ29yeUZpbHRlcj86IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGFsbFByb2R1Y3RzOiBwcm9kdWN0W10gPSB0aGlzLmdldEFsbFByb2R1Y3RzSW5TdG9yZSgpXHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IGFsbFByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICBpZihsZW5ndGggPCAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxsUHJvZHVjdHMgPSB0aGlzLmdldEluaXRpYWxMaXN0T2ZQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICBsZW5ndGggPSBhbGxQcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZU5ld1N0b3JhZ2UoYWxsUHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjYXRlZ29yeUZpbHRlciAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXBwLmNsZWFuTGlzdE9mUHJvZHVjdHNPblBhZ2UoKTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGFsbFByb2R1Y3RzLmZpbHRlcihwID0+IHAuY2F0ZWdvcnkgPT0gY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICAgICAgICBhbGxQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHM7XHJcbiAgICAgICAgICAgIGxlbmd0aCA9IGFsbFByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGFsbFByb2R1Y3RzW2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW1Qcm9kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZWxlbVByb2QuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19faXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1UaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlbGVtVGl0LmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX2l0ZW0tLXRpdHRsZVwiO1xyXG4gICAgICAgICAgICBlbGVtVGl0LnRleHRDb250ZW50ID0gcHJvZHVjdC50aXR0bGU7IFxyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBlbGVtSW1nLmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX2l0ZW0tLWltYWdlXCI7XHJcbiAgICAgICAgICAgIGVsZW1JbWcuc3JjID0gcHJvZHVjdC5pbWFnZTsgXHJcbiAgICAgICAgICAgIGVsZW1JbWcuYWx0ID0gXCJpbWFnZVwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZWxlbURlc2MuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19faXRlbS0tZGVzY3JpcHRpb25cIjtcclxuICAgICAgICAgICAgZWxlbURlc2MudGV4dENvbnRlbnQgPSBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1CdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGVsZW1CdXQudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgICAgIGVsZW1CdXQuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19faXRlbS0tYnV0dG9uXCI7XHJcbiAgICAgICAgICAgIGVsZW1CdXQudmFsdWUgPSBcIkFkZCB0byBiYXNrZXRcIjtcclxuXHJcbiAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1UaXQpO1xyXG4gICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtSW1nKTtcclxuICAgICAgICAgICAgZWxlbVByb2QuYXBwZW5kQ2hpbGQoZWxlbURlc2MpO1xyXG4gICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtQnV0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBtYWluSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2l0ZW1zXCIpO1xyXG4gICAgICAgICAgICBtYWluSXRlbXMhLmFwcGVuZENoaWxkKGVsZW1Qcm9kKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBBZGRFdmVudHNPbkNhdGVnb3JpZXM6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGxldCBuYXZSZWZlcmVuY2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fcmVmLS1jYXRlZ29yeVwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZSZWZlcmVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuYXZSZWZlcmVuY2VzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNob3dQcm9kdWN0c0luQ2F0ZWdvcnkpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBBZGRFdmVudHNPbkFkZFRvQmFza2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIEJ1dHRvbkFkZGluZy5hZGRFdmVudHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QmFza2V0Q291bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWxsUHJvZHVjdHNJblN0b3JlOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGpzb25Qcm9kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKTtcclxuICAgICAgICBpZihqc29uUHJvZCA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAganNvblByb2QgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGpzb25Qcm9kKTtcclxuICAgICAgICBpZihwcm9kdWN0cyA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SW5pdGlhbExpc3RPZlByb2R1Y3RzOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBbXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIlhpYW9taSBNaSAxMFRcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1swXSwgZGVzY3JpcHRpb246IFwiU21hcnRwaG9uZSwgNiBHQiArIDEyOCBHQiwgRHVhbCBTaW0sIEFsZXhhIEhhbmRzLUZyZWUsIEdyaWdpbyAoTHVuYXIgU2lsdmVyKVwiLCBpbWFnZTogXCJJbWFnZXMvbWkxMHQ1Zy5qcGdcIn0sXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIlhpYW9taSBSZWRtaSBOb3RlIDEwIFByb1wiLCBjYXRlZ29yeTogQXBwLnByb2R1Y3RDYXRlZ29yaWVzWzBdLCBkZXNjcmlwdGlvbjogXCJTbWFydHBob25lLCA2NEdCIER1YWwgU0lNLCBHU00gVW5sb2NrZWQsIChDRE1BIFZlcml6b24vU3ByaW50IE5vdCBTdXBwb3J0ZWQpIFNtYXJ0cGhvbmUgSW50ZXJuYXRpb25hbCBWZXJzaW9uIE5vIFdhcnJhbnR5IChPbnl4IEdyYXkpXCIsIGltYWdlOiBcIkltYWdlcy9yZWRtaW5vdGUxMHByby5qcGdcIn0sXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIlhpYW9taSBNaSBCYW5kIDZcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1sxXSwgZGVzY3JpcHRpb246IFwiQWN0aXZpdHkgVHJhY2tlciBIaWdoLVJlcyAxLjU2IEFNT0xFRCBTY3JlZW4sIFNwTzIgTW9uaXRvciwgMzAgU3BvcnRzIE1vZGVzLCAyNEhSIEhlYXJ0IFJhdGUgYW5kIFNsZWVwIE1vbml0b3IgU21hcnQgV2F0Y2hcIiwgaW1hZ2U6IFwiSW1hZ2VzL21pYmFuZDZhY3Rpdml0eS5qcGdcIn0sXHJcbiAgICAgICAgICAgIHsgdGl0dGxlOiBcIkFtYXpmaXQgU21hcnQgV2F0Y2hcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1sxXSwgZGVzY3JpcHRpb246IFwiRml0bmVzcyBUcmFja2VyIGZvciBNZW4gV29tZW4gd2l0aCA2MCsgU3BvcnRzIE1vZGVzLCA5LURheSBCYXR0ZXJ5IExpZmUsIEJsb29kIE94eWdlbiBCcmVhdGhpbmcgSGVhcnQgUmF0ZSBTbGVlcCBNb25pdG9yLCA1IEFUTSBXYXRlcnByb29mLCBmb3IgaVBob25lIEFuZHJvaWQgUGhvbmUgKEJsYWNrKVwiLCBpbWFnZTogXCJJbWFnZXMvQW1hemZpdEJpcFVTbWFydFdhdGNoLmpwZ1wifSxcclxuICAgICAgICAgICAgeyB0aXR0bGU6IFwiV2l0aGluZ3MgU3RlZWwgSFJcIiwgY2F0ZWdvcnk6IEFwcC5wcm9kdWN0Q2F0ZWdvcmllc1sxXSwgZGVzY3JpcHRpb246IFwiSHlicmlkIFNtYXJ0d2F0Y2ggLSBBY3Rpdml0eSwgU2xlZXAsIEZpdG5lc3MgYW5kIEhlYXJ0IFJhdGUgVHJhY2tlciB3aXRoIENvbm5lY3RlZCBHUFNcIiwgaW1hZ2U6IFwiSW1hZ2VzL1dpdGhpbmdzU3RlZWxIUkh5YnJpZFNtYXJ0d2F0Y2guanBnXCJ9LFxyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJSYXplciBWaXBlciBVbHRpbWF0ZVwiLCBjYXRlZ29yeTogQXBwLnByb2R1Y3RDYXRlZ29yaWVzWzJdLCBkZXNjcmlwdGlvbjogXCJMaWdodGVzdCBXaXJlbGVzcyBHYW1pbmcgTW91c2U6IEZhc3Rlc3QgR2FtaW5nIFN3aXRjaGVzIC0gMjBLIERQSSBPcHRpY2FsIFNlbnNvciAtIENocm9tYSBMaWdodGluZyAtIDggUHJvZ3JhbW1hYmxlIEJ1dHRvbnMgLSA3MCBIciBCYXR0ZXJ5IC0gQ2xhc3NpYyBCbGFja1wiLCBpbWFnZTogXCJJbWFnZXMvUmF6ZXJWaXBlclVsdGltYXRlLmpwZ1wifSxcclxuICAgICAgICAgICAgeyB0aXR0bGU6IFwiTEVEIFdpcmVsZXNzIE1vdXNlXCIsIGNhdGVnb3J5OiBBcHAucHJvZHVjdENhdGVnb3JpZXNbMl0sIGRlc2NyaXB0aW9uOiBcIlJlY2hhcmdlYWJsZSBTbGltIFNpbGVudCBNb3VzZSAyLjRHIFBvcnRhYmxlIE1vYmlsZSBPcHRpY2FsIE9mZmljZSBNb3VzZSB3aXRoIFVTQiAmIFR5cGUtYyBSZWNlaXZlciwgMyBBZGp1c3RhYmxlIERQSSBmb3IgTm90ZWJvb2ssIFBDLCBMYXB0b3AsIENvbXB1dGVyLCBEZXNrdG9wIChCbGFjaylcIiwgaW1hZ2U6IFwiSW1hZ2VzL0xFRFdpcmVsZXNzTW91c2UuanBnXCJ9LFxyXG4gICAgICAgICAgICB7IHRpdHRsZTogXCJQZXJpeHgxMTU2OCBQZXJpbWljZVwiLCBjYXRlZ29yeTogQXBwLnByb2R1Y3RDYXRlZ29yaWVzWzJdLCBkZXNjcmlwdGlvbjogXCJXaXJlbGVzcyBUcmFja2JhbGwgTW91c2UsIEJ1aWxkLWluIDEuMzQgSW5jaCBUcmFja2JhbGwgd2l0aCBQb2ludGluZyBGZWF0dXJlLCA1IFByb2dyYW1tYWJsZSBCdXR0b25zLCAyIERQSSBMZXZlbCwgQmxhY2tcIiwgaW1hZ2U6IFwiSW1hZ2VzL1Blcml4MTE1NjhQZXJpbWljZS03MTcuanBnXCJ9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplTmV3U3RvcmFnZTogZnVuY3Rpb24ocHJvZHVjdHM6IHByb2R1Y3RbXSl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93UHJvZHVjdHNJbkNhdGVnb3J5OiBmdW5jdGlvbih0aGlzOiBIVE1MRWxlbWVudCwgZSA6IEV2ZW50KXtcclxuICAgICAgICBjb25zdCBjYXRJZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5RmlsdGVyID0gY2F0SWQuc3Vic3RyaW5nKDMpOyAgICBcclxuICAgICAgICBBcHAuVXBkYXRlTGlzdE9mUHJvZHVjdHNPbk1haW5QYWdlKGNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgICBBcHAuVXBkYXRlTWFpblBhZ2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xlYW5MaXN0T2ZQcm9kdWN0c09uUGFnZSgpe1xyXG4gICAgICAgIHZhciBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbXNcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW5fX2l0ZW1zX19pdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gcHJvZHVjdHNbMF07XHJcbiAgICAgICAgICAgIG1haW5FbGVtIS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxuQXBwLk1haW4oKTtcclxuXHJcbmNvbnNvbGUubG9nKFwibWFpbi5qcyBpcyBsb2FkZWQuXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9