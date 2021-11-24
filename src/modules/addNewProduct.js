"use strict";

console.log("addNewProduct.js is loading...");

const AddingNewProductToStore = {
    
    addEvents: function(){
        let elemAdd = document.querySelector(".btn-block_add"); 
        elemAdd.addEventListener("click", this.addNewProduct);     
        
        let elemRes = document.querySelector(".btn-block_resset");
        elemRes.addEventListener("click", this.resetForm);
    },
    
    addNewProduct: function(e){
        let form = document.addingNewProductForm;
        let product = {};
        let products = [];
        product.tittle = form.tittle.value;
        product.description = form.description.value;
        product.image = form.ImageUrl.value;
        product.category = form.category.value;

        if(product.tittle == "" || product.description == "")
        {
            // e.preventDefault()
            return;
        }
        if(product.image == "")
        {
            product.image = "Service/noImage.png";
        }

        let storedPproducts = JSON.parse(localStorage.getItem("products"));
        if(storedPproducts !== null)
        {
            products = storedPproducts;        
        }
        let index = products.length;
        products[index] = product;
        localStorage.setItem("products", JSON.stringify(products));

        console.log("Added new product: \n" + form.tittle.value +"\n" + form.description.value);
    },

    resetForm: function(){
        //tbd
    }
    
    
}

AddingNewProductToStore.addEvents();

console.log("addNewProduct.js is loaded.");