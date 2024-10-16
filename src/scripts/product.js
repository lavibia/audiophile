import { renderProductDetails } from "./DOMProduct";
import { getProductDetails } from "./StorageProducts.mjs";
// import { renderProductsList } from "./DOMCategory.mjs";
// console.log(getCategoryProducts('speakers'))

// window.addEventListener("load", () => {
//  loadEdit().then(/* callback function here */);
// }, false);

window.onload = async function () {
 const urlParams = new URLSearchParams(window.location.search);
 const title = urlParams.get('title');
 window.history.replaceState({}, '', `product.html?title=${title}`);
 if (title) {

  let prodInfo = await getProductDetails(title)
  // console.log(list);
  let wrapper = document.querySelector('.product__details')
  // console.log(wrapper)
  renderProductDetails(prodInfo, wrapper);
 } else {
  console.error('No product found');
 }

 // Quantity managemenct
 document.querySelector(".quantity").addEventListener("click", (Event) => {
  if (Event.target.classList.contains("minus")) {
   decreaseQuantityDOM();
  } else if (Event.target.classList.contains("plus")) {
   increaseQuantityDOM();
  }
 })
 document.querySelector(".quantity>.input-box").addEventListener("focusout", handleQuantityChange);

 //Adding to cart products
 document.querySelector("form.product-quantity>button").addEventListener('click', (Event) => {
  window.alert("Hehe")
  Event.preventDefault();
 })

}




function decreaseQuantityDOM() {

 const inputBox = document.querySelector(".quantity>.input-box")
 let value = parseInt(inputBox.value);
 // value = isNaN(value) ? 1 : Math.max(value - 1, 1);
 value = isNaN(value) ? 1 : value - 1;
 inputBox.value = value;
 updateButtonStates();
 handleQuantityChange();
}
function increaseQuantityDOM() {
 const inputBox = document.querySelector(".quantity>.input-box")
 let value = parseInt(inputBox.value);
 // value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
 value = isNaN(value) ? 1 : value + 1;
 inputBox.value = value;
 updateButtonStates();
 handleQuantityChange();
}

function handleQuantityChange() {
 const inputBox = document.querySelector(".quantity>.input-box")
 let value = parseInt(inputBox.value);


 value = isNaN(value) ? 1 : value;

 if (value > parseInt(inputBox.max))
  value = parseInt(inputBox.max);
 else if (value < parseInt(inputBox.min))
  value = parseInt(inputBox.min)


 // Execute your code here based on the updated quantity value
 inputBox.value = value;
 console.log("Quantity changed:", value);
}
function updateButtonStates() {
 const inputBox = document.querySelector(".quantity>.input-box");
 const minusBtn = document.querySelector(".quantity>.minus");
 const plusBtn = document.querySelector(".quantity>.plus");
 const value = parseInt(inputBox.value);
 minusBtn.disabled = value <= 1;
 plusBtn.disabled = value >= parseInt(inputBox.max);
}