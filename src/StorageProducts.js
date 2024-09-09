// getcategory products(category) async fetch where category = category
// getproduct info (name) async fetch where product name= name
//



export function getCategoryProducts(prodCategory) {
  // Define the API endpoint
  let products = [];
  let json = './data.json';
  // Fetch JSON data from the API
  fetch(json)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
  console.log(data[0].category)
  for(let i=0;i<data.length;i++){
    if(data[i].category.toString()===prodCategory){
      products.push(data[i])
    }
  }  
  console.log(products)
  return products; 
})
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// 
// let result =[];
//  result = await fetch('./data.json').then(result=>result.json()
// ).then(

// result=>JSON.parse(result))
// .then(
// products.push(result.filter(item=> item.category===category)
// )
//  ).then(console.log(products))

// }
  // if (!response.ok) {
  //  throw new Error(`Response status: ${response.status}`)
  // }

  // products = await response.json();
  // console.log(json)


 // *******************


//  return function getFromCategory(category) {
  

// };