import "./style.css";

// on click get text title and displayDOMCategory(StorageProducts.categoryProducts(text title))
// on click get text title and displayDOMPRoduct(StorageProoducts.productInfo(texttitle))
import { getCategoryProducts } from "./StorageProducts";
import { renderProductsList } from "./DOMCategory";
console.log(getCategoryProducts('speakers'))
let wrapper = document.querySelector('.category__products')
renderProductsList(getCategoryProducts('headphones'), wrapper);