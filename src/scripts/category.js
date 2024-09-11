// on click get text title and displayDOMCategory(StorageProducts.categoryProducts(text title))
// on click get text title and displayDOMPRoduct(StorageProoducts.productInfo(texttitle))
import { getCategoryProducts } from "./StorageProducts.mjs";
import { renderProductsList } from "./DOMCategory.mjs";
// console.log(getCategoryProducts('speakers'))
let list = await getCategoryProducts('headphones')
console.log(list);
let wrapper = document.querySelector('.category__products')
console.log(wrapper)
renderProductsList(list, wrapper);