import { getProductDetails } from "./StorageProducts.mjs";
// import { renderProductsList } from "./DOMCategory.mjs";
// console.log(getCategoryProducts('speakers'))



window.onload = async function () {
 const urlParams = new URLSearchParams(window.location.search);
 const title = urlParams.get('title');
 window.history.replaceState({}, '', `product.html?title=${title}`);
 if (title) {
  let headerTitle = document.querySelector('.product__hero>#productTitle')
  headerTitle.textContent = 'Test'

  // let list = await getCategoryProducts(category)
  // console.log(list);
  // let wrapper = document.querySelector('.category__products')
  // console.log(wrapper)
  // renderProductsList(list, wrapper);
 } else {
  console.error('No product found');
 }
};