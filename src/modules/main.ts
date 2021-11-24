"use strict";

console.log("main.js is loading...");

import {ButtonAdding} from './mainAddToBasket.js';
import {UpdateBasketCountIcon} from './basket.js';


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

    Main: function(){

        this.UpdateListOfProductsOnMainPage();    
        this.AddEventsOnCategories();
        this.UpdateMainPage();
    },


    UpdateMainPage: function(){ 
        this.AddEventsOnAddToBasket();
        UpdateBasketCountIcon();
    },

    UpdateListOfProductsOnMainPage: function(categoryFilter){
        let allProducts = this.getAllProductsInStore()
        let length = allProducts.length;
        if(length < 1)
        {
            allProducts = this.getInitialListOfProducts();
            length = allProducts.length;
            this.initializeNewStorage(allProducts);
        }
        if(categoryFilter != null)
        {
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

    AddEventsOnCategories: function(){

        let navReferences = document.getElementsByClassName("nav__ref--category");

        for (let i = 0; i < navReferences.length; i++) {
            const element = navReferences[i];
            element.addEventListener("click", this.showProductsInCategory);     
        }
    },

    AddEventsOnAddToBasket: function(){
        ButtonAdding.addEvents();
    },

    getBasketCount: function() {
        return this.products.length;
    },

    getAllProductsInStore: () => {
        let products = JSON.parse(localStorage.getItem("products"));
        if(products === null)
        {
            products = [];
        }
        return products;
    },

    getInitialListOfProducts: function(){

        let products = [
            { tittle: "Xiaomi Mi 10T", category: App.productCategories[0], description: "Smartphone, 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Grigio (Lunar Silver)", image: "Images/mi10t5g.jpg"},
            { tittle: "Xiaomi Redmi Note 10 Pro", category: App.productCategories[0], description: "Smartphone, 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version No Warranty (Onyx Gray)", image: "Images/redminote10pro.jpg"},
            { tittle: "Xiaomi Mi Band 6", category: App.productCategories[1], description: "Activity Tracker High-Res 1.56 AMOLED Screen, SpO2 Monitor, 30 Sports Modes, 24HR Heart Rate and Sleep Monitor Smart Watch", image: "Images/miband6activity.jpg"},
            { tittle: "Amazfit Smart Watch", category: App.productCategories[1], description: "Fitness Tracker for Men Women with 60+ Sports Modes, 9-Day Battery Life, Blood Oxygen Breathing Heart Rate Sleep Monitor, 5 ATM Waterproof, for iPhone Android Phone (Black)", image: "Images/AmazfitBipUSmartWatch.jpg"},
            { tittle: "Withings Steel HR", category: App.productCategories[1], description: "Hybrid Smartwatch - Activity, Sleep, Fitness and Heart Rate Tracker with Connected GPS", image: "Images/WithingsSteelHRHybridSmartwatch.jpg"},
            { tittle: "Razer Viper Ultimate", category: App.productCategories[2], description: "Lightest Wireless Gaming Mouse: Fastest Gaming Switches - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery - Classic Black", image: "Images/RazerViperUltimate.jpg"},
            { tittle: "LED Wireless Mouse", category: App.productCategories[2], description: "Rechargeable Slim Silent Mouse 2.4G Portable Mobile Optical Office Mouse with USB & Type-c Receiver, 3 Adjustable DPI for Notebook, PC, Laptop, Computer, Desktop (Black)", image: "Images/LEDWirelessMouse.jpg"},
            { tittle: "Perixx11568 Perimice", category: App.productCategories[2], description: "Wireless Trackball Mouse, Build-in 1.34 Inch Trackball with Pointing Feature, 5 Programmable Buttons, 2 DPI Level, Black", image: "Images/Perix11568Perimice-717.jpg"},
        ]

        return products;
    },

    initializeNewStorage: function(products){
        localStorage.setItem("products", JSON.stringify(products));
    },

    showProductsInCategory: function(e){
        const catId = e.target.id;
        let categoryFilter = catId.substring(3);    
        App.UpdateListOfProductsOnMainPage(categoryFilter);
        App.UpdateMainPage();
    },

    cleanListOfProductsOnPage(){
        var mainElem = document.querySelector(".main__items");
        let products = document.getElementsByClassName("main__items__item");
        const length = products.length;
        
        for (let i = 0; i < length; i++) {
            let element = products[0];
            mainElem.removeChild(element);
        }
    },

}

App.Main();

console.log("main.js is loaded.")