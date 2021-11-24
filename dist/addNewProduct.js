/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./modules/addNewProduct.ts ***!
  \**********************************/

console.log("addNewProduct.js is loading...");
const AddingNewProductToStore = {
    addEvents: function () {
        let elemAdd = document.querySelector(".btn-block_add");
        elemAdd.addEventListener("click", this.addNewProduct);
        let elemRes = document.querySelector(".btn-block_resset");
        elemRes.addEventListener("click", this.resetForm);
    },
    addNewProduct: function (e) {
        var _a, _b, _c, _d;
        let form = document.getElementsByName("addingNewProductForm")[0];
        let tittle = (_a = form.children.namedItem("tittle")) === null || _a === void 0 ? void 0 : _a.nodeValue;
        let description = (_b = form.children.namedItem("description")) === null || _b === void 0 ? void 0 : _b.nodeValue;
        let image = (_c = form.children.namedItem("ImageUrl")) === null || _c === void 0 ? void 0 : _c.nodeValue;
        let category = (_d = form.children.namedItem("category")) === null || _d === void 0 ? void 0 : _d.nodeValue;
        if (tittle == "" || description == "") {
            // e.preventDefault()
            return;
        }
        if (image == "") {
            image = "Service/noImage.png";
        }
        let product = {
            tittle,
            description,
            image,
            category,
        };
        let products = [];
        let jsonProd = localStorage.getItem("products");
        if (jsonProd == null) {
            jsonProd = "";
        }
        let storedPproducts = JSON.parse(jsonProd);
        if (storedPproducts !== null) {
            products = storedPproducts;
        }
        let index = products.length;
        products[index] = product;
        localStorage.setItem("products", JSON.stringify(products));
        console.log("Added new product: \n" + product.tittle + "\n" + product.description);
    },
    resetForm: function () {
        //tbd
    }
};
AddingNewProductToStore.addEvents();
console.log("addNewProduct.js is loaded.");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkTmV3UHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUU5QyxNQUFNLHVCQUF1QixHQUFHO0lBRTVCLFNBQVMsRUFBRTtRQUNQLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RCxPQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2RCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUQsT0FBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGFBQWEsRUFBRSxVQUE0QixDQUFTOztRQUNoRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLE1BQU0sR0FBRyxVQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMENBQUUsU0FBUyxDQUFDO1FBQzFELElBQUksV0FBVyxHQUFHLFVBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQywwQ0FBRSxTQUFTLENBQUM7UUFDcEUsSUFBSSxLQUFLLEdBQUcsVUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDBDQUFFLFNBQVMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsR0FBRyxVQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsMENBQUUsU0FBUyxDQUFDO1FBRTlELElBQUcsTUFBTSxJQUFJLEVBQUUsSUFBSSxXQUFXLElBQUksRUFBRSxFQUNwQztZQUNJLHFCQUFxQjtZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFHLEtBQUssSUFBSSxFQUFFLEVBQ2Q7WUFDSSxLQUFLLEdBQUcscUJBQXFCLENBQUM7U0FDakM7UUFFRCxJQUFJLE9BQU8sR0FBRztZQUNWLE1BQU07WUFDTixXQUFXO1lBQ1gsS0FBSztZQUNMLFFBQVE7U0FDWCxDQUFDO1FBQ0YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBRyxRQUFRLElBQUksSUFBSSxFQUNuQjtZQUNJLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUcsZUFBZSxLQUFLLElBQUksRUFDM0I7WUFDSSxRQUFRLEdBQUcsZUFBZSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1AsS0FBSztJQUNULENBQUM7Q0FHSjtBQUVELHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvYWRkTmV3UHJvZHVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwiYWRkTmV3UHJvZHVjdC5qcyBpcyBsb2FkaW5nLi4uXCIpO1xyXG5cclxuY29uc3QgQWRkaW5nTmV3UHJvZHVjdFRvU3RvcmUgPSB7XHJcbiAgICBcclxuICAgIGFkZEV2ZW50czogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgZWxlbUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJsb2NrX2FkZFwiKTsgXHJcbiAgICAgICAgZWxlbUFkZCEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkTmV3UHJvZHVjdCk7ICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZWxlbVJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJsb2NrX3Jlc3NldFwiKTtcclxuICAgICAgICBlbGVtUmVzIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEZvcm0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYWRkTmV3UHJvZHVjdDogZnVuY3Rpb24odGhpczogSFRNTEVsZW1lbnQsIGUgOiBFdmVudCl7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImFkZGluZ05ld1Byb2R1Y3RGb3JtXCIpWzBdO1xyXG4gICAgICAgIGxldCB0aXR0bGUgPSBmb3JtLmNoaWxkcmVuLm5hbWVkSXRlbShcInRpdHRsZVwiKT8ubm9kZVZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uY2hpbGRyZW4ubmFtZWRJdGVtKFwiZGVzY3JpcHRpb25cIik/Lm5vZGVWYWx1ZTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBmb3JtLmNoaWxkcmVuLm5hbWVkSXRlbShcIkltYWdlVXJsXCIpPy5ub2RlVmFsdWU7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZm9ybS5jaGlsZHJlbi5uYW1lZEl0ZW0oXCJjYXRlZ29yeVwiKT8ubm9kZVZhbHVlO1xyXG5cclxuICAgICAgICBpZih0aXR0bGUgPT0gXCJcIiB8fCBkZXNjcmlwdGlvbiA9PSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW1hZ2UgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlID0gXCJTZXJ2aWNlL25vSW1hZ2UucG5nXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgdGl0dGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcblxyXG4gICAgICAgIGxldCBqc29uUHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgaWYoanNvblByb2QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpzb25Qcm9kID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdG9yZWRQcHJvZHVjdHMgPSBKU09OLnBhcnNlKGpzb25Qcm9kKTtcclxuICAgICAgICBpZihzdG9yZWRQcHJvZHVjdHMgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyA9IHN0b3JlZFBwcm9kdWN0czsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgcHJvZHVjdHNbaW5kZXhdID0gcHJvZHVjdDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgbmV3IHByb2R1Y3Q6IFxcblwiICsgcHJvZHVjdC50aXR0bGUgK1wiXFxuXCIgKyBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRGb3JtOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vdGJkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5BZGRpbmdOZXdQcm9kdWN0VG9TdG9yZS5hZGRFdmVudHMoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiYWRkTmV3UHJvZHVjdC5qcyBpcyBsb2FkZWQuXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==