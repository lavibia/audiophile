// on click get text title and displayDOMCategory(StorageProducts.categoryProducts(text title))
// on click get text title and displayDOMPRoduct(StorageProoducts.productInfo(texttitle))
import { getCategoryProducts } from "./StorageProducts.mjs";
import { renderProductsList } from "./DOMCategory.mjs";
// console.log(getCategoryProducts('speakers'))



window.onload = async function () {
 const urlParams = new URLSearchParams(window.location.search);
 const category = urlParams.get('category');
 // window.history.replaceState({}, '', `category.html?category=${category}`);
 if (category) {

  let list = await getCategoryProducts(category)
  console.log(list);
  let wrapper = document.querySelector('.category__products')
  console.log(wrapper)
  renderProductsList(list, wrapper);
 } else {
  console.error('No category specified');
 }
};