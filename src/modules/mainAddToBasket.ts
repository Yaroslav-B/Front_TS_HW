"use strict";

import {UpdateBasketCountIcon} from './basket';

export const ButtonAdding = {
    
    addNewProduct: function(this: HTMLElement, e : Event) {
        let product = {
            tittle: "",
            description: "",
            image: "",
            category: "",
        };
        let products: string[] | { tittle: string; description: string; image: string; category: string; }[] = [];
        let length = 0;
        let elem = this;

        elem.nodeValue = "Added";
        elem.style.color = "#4caf50";
        elem.style.fontStyle = "italic";
        elem.style.fontWeight = "bold";
        // var elem = document.querySelector(".main__items__item--button");  
        
        product.tittle = elem.parentElement!.children[0].textContent!;
        product.description = elem.parentElement!.children[2].textContent!;

        let storedPproducts = null;
        let jsonProd = sessionStorage.getItem("products");
        
        if(jsonProd != null)
        {
            storedPproducts = JSON.parse(jsonProd);
        }
        
        if(storedPproducts != null)
        {
            products = storedPproducts;
            length = storedPproducts.length;
        }
        
        products[length] = product;
        sessionStorage.setItem("products", JSON.stringify(products));
        UpdateBasketCountIcon();

        console.log("Added product:\n" + product.tittle + "\n" + product.description);
    },

    addEvents: () => {
        let addingButtons = document.getElementsByClassName("main__items__item--button");

        for (let i = 0; i < addingButtons.length; i++) {
            const element = addingButtons[i];
            element.addEventListener("click", ButtonAdding.addNewProduct);     
        }
    },
}