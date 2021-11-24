"use strict";

console.log("addNewProduct.js is loading...");

const AddingNewProductToStore = {
    
    addEvents: function(){
        let elemAdd = document.querySelector(".btn-block_add"); 
        elemAdd!.addEventListener("click", this.addNewProduct);     
        
        let elemRes = document.querySelector(".btn-block_resset");
        elemRes!.addEventListener("click", this.resetForm);
    },
    
    addNewProduct: function(this: HTMLElement, e : Event){
        let tittleElem = document.getElementsByName("tittle")[0] as HTMLInputElement;
        let descriptionElem = document.getElementsByName("description")[0] as HTMLInputElement;
        let imageElem = document.getElementsByName("ImageUrl")[0] as HTMLInputElement;
        let categoryElem = document.getElementsByName("category")[0] as HTMLSelectElement;

        let tittle = tittleElem.value;
        let description = descriptionElem.value;
        let image = imageElem.value;
        let category = categoryElem.value;


        if(tittle == "" || description == "")
        {
            // e.preventDefault()
            return;
        }
        if(image == "")
        {
            image = "Service/noImage.png";
        }

        let product = {
            tittle,
            description,
            image,
            category,
        };
        let products = [];

        let storedPproducts = null;
        let jsonProd = localStorage.getItem("products");
        if(jsonProd != null)
        {
            storedPproducts = JSON.parse(jsonProd);
        }
        
        if(storedPproducts != null)
        {
            products = storedPproducts;        
        }
        let index = products.length;
        products[index] = product;
        localStorage.setItem("products", JSON.stringify(products));

        console.log("Added new product: \n" + product.tittle +"\n" + product.description);
    },

    resetForm: function(){
        //tbd
    }
    
    
}

AddingNewProductToStore.addEvents();

console.log("addNewProduct.js is loaded.");