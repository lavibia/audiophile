// on click get text title and displayDOMCategory(StorageProducts.categoryProducts(text title))
// on click get text title and displayDOMPRoduct(StorageProoducts.productInfo(texttitle))
import { getCategoryProducts } from "./StorageProducts.mjs";
import { renderProductsList } from "./DOMCategory.mjs";
// console.log(getCategoryProducts('speakers'))



window.onload = async function () {
 const urlParams = new URLSearchParams(window.location.search);
 const category = urlParams.get('category');
 window.history.replaceState({}, '', `category.html?category=${category}`);
 if (category) {
  //set Page Header
  let headerTitle = document.querySelector('.category__hero>#categoryTitle')
  headerTitle.textContent = `${category}`;

  //load product list
  let list = await getCategoryProducts(category);
  let wrapper = document.querySelector('.category__products');
  renderProductsList(list, wrapper);
 } else {
  console.error('No category found');
 }
};