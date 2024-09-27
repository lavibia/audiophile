// getcategory products(category) async fetch where category = category
// getproduct info (name) async fetch where product name= name
//

import json from '../data.json';

export async function getCategoryProducts(prodCategory) {
  let products = [];
  await fetch(json)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category.toString() === prodCategory) {
          products.push(data[i])
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return products;
}


export async function getProductDetails(prodSlug) {
  let details;
  await fetch(json)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].slug.toString() === prodSlug) {
          details = data[i];
        }
      }

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return details;
}