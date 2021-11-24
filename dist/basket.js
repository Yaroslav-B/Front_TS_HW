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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./modules/basket.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFza2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7O0FBRWIsTUFBTSxNQUFNLEdBQUc7SUFDWCxNQUFNLEVBQUUsQ0FBQztJQUVULGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUVuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQzNCO1lBQ0ksT0FBTztTQUNWO1FBRUQsaUNBQXFCLEdBQUUsQ0FBQztRQUV4QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV6QyxJQUFHLE1BQU0sR0FBRyxDQUFDLEVBQ2I7WUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTVCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7Z0JBRTVDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFFckMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztnQkFDekQsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO2dCQUUzQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO2dCQUNsRCxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU07Z0JBRTNCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDekQsU0FBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUVuQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUcsUUFBUSxJQUFJLElBQUksRUFDbkI7WUFDSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxJQUFHLFFBQVEsS0FBSyxJQUFJLEVBQ3BCO1lBQ0ksUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQUVNLE1BQU0scUJBQXFCLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsSUFBRyxRQUFRLElBQUksSUFBSSxFQUNuQjtRQUNJLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDakI7SUFFTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM5RCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFHLEtBQUssS0FBSyxJQUFJLEVBQ2pCO1FBQ0ksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7S0FDeEI7SUFDRCxJQUFLLENBQUMsV0FBVyxHQUFHLEtBQTBCLENBQUM7QUFDbkQsQ0FBQztBQWZZLDZCQUFxQix5QkFlakM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7Ozs7Ozs7VUVwRjFCO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhc2tldC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBCYXNrZXQgPSB7XHJcbiAgICBsZW5ndGg6IDAsXHJcblxyXG4gICAgVXBkYXRlQmFza2V0UGFnZTogKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgcGFnZSA9IFwiXCI7XHJcbiAgICAgICAgcGFnZSA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKC0xKS50b1N0cmluZygpOyBcclxuICAgICAgICBpZighcGFnZS5pbmNsdWRlcyhcImJhc2tldFwiKSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVcGRhdGVCYXNrZXRDb3VudEljb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBCYXNrZXQuZ2V0QWRkZWRQcm9kdWN0cygpO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbVByb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbVByb2QuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19fcHJvZHVjdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtVGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGVsZW1UaXQuY2xhc3NOYW1lID0gXCJtYWluX19pdGVtc19fcHJvZHVjdC0tdGl0dGxlXCI7XHJcbiAgICAgICAgICAgICAgICBlbGVtVGl0LnRleHRDb250ZW50ID0gcHJvZHVjdC50aXR0bGU7IFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBlbGVtRGVzYy5jbGFzc05hbWUgPSBcIm1haW5fX2l0ZW1zX19wcm9kdWN0LS1kZXNjcmlwdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgZWxlbURlc2MudGV4dENvbnRlbnQgPSBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtU3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbVN0LmNsYXNzTmFtZSA9IFwibWFpbl9faXRlbXNfX3Byb2R1Y3QtLXN0YXR1c1wiO1xyXG4gICAgICAgICAgICAgICAgZWxlbVN0LnRleHRDb250ZW50ID0gXCJuZXchXCJcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtUHJvZC5hcHBlbmRDaGlsZChlbGVtVGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1EZXNjKTtcclxuICAgICAgICAgICAgICAgIGVsZW1Qcm9kLmFwcGVuZENoaWxkKGVsZW1TdCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBtYWluSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9faXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICBtYWluSXRlbXMhLmFwcGVuZENoaWxkKGVsZW1Qcm9kKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QWRkZWRQcm9kdWN0czogKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQganNvblByb2QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpO1xyXG4gICAgICAgIGlmKGpzb25Qcm9kID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBqc29uUHJvZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGpzb25Qcm9kKTtcclxuXHJcbiAgICAgICAgaWYocHJvZHVjdHMgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZW5ndGggPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUJhc2tldENvdW50SWNvbiA9ICgpID0+IHtcclxuICAgIGxldCBqc29uUHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgaWYoanNvblByb2QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGpzb25Qcm9kID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgbGV0IHByb2RzID0gSlNPTi5wYXJzZShqc29uUHJvZCk7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19iYXNrZXQtLWNvdW50ZXJcIik7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYocHJvZHMgIT09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgY291bnQgPSBwcm9kcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBlbGVtIS50ZXh0Q29udGVudCA9IGNvdW50IGFzIHVua25vd24gYXMgc3RyaW5nO1xyXG59ICBcclxuXHJcbkJhc2tldC5VcGRhdGVCYXNrZXRQYWdlKCk7XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9tb2R1bGVzL2Jhc2tldC50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==