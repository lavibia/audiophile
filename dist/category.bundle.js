/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 255:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _StorageProducts_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _DOMCategory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
// on click get text title and displayDOMCategory(StorageProducts.categoryProducts(text title))
// on click get text title and displayDOMPRoduct(StorageProoducts.productInfo(texttitle))


// console.log(getCategoryProducts('speakers'))
let list = await (0,_StorageProducts_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getCategoryProducts */ .z)('headphones')
console.log(list);
let wrapper = document.querySelector('.category__products')
console.log(wrapper)
;(0,_DOMCategory_mjs__WEBPACK_IMPORTED_MODULE_1__/* .renderProductsList */ .$)(list, wrapper);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ renderProductsList)
/* harmony export */ });
// populate html dom with category products
//modify url

function renderProductsList(list, wrapper) {
 // wrapper is category products
 let otherProducts = [];
 for (let i = 0; i < list.length; i++) {
  let articleDOM = document.createElement('article');
  articleDOM.classList.add('product__preview');
  // img section

  // product text info
  let wrapperText = document.createElement('div');
  wrapperText.classList.add('product__preview__text')

  // new product text
  if (list[i].new === true) {
   let newProdDOM = document.createElement('div');
   newProdDOM.classList.add('color__accent', 'overline');
   newProdDOM.textContent = 'New Product';
   wrapperText.appendChild(newProdDOM);
  }

  //title
  let titleDOM = document.createElement('h2');
  titleDOM.classList.add('h2');
  titleDOM.textContent = `${list[i].name}`;
  wrapperText.appendChild(titleDOM);

  // description

  let descDOM = document.createElement('p');
  descDOM.textContent = list[i].description;
  wrapperText.appendChild(descDOM);






  // articleDOM.appendChild('imgDom')
  articleDOM.appendChild(wrapperText);

  if (wrapperText.childElementCount === 3) {
   // if it is a new element add it to page first
   wrapper.appendChild(articleDOM);

  } else {
   //add it after exiting loop
   otherProducts.push(articleDOM);
  }

 }

 //add products that are not new
 for (let i = 0; i < otherProducts.length; i++) {
  wrapper.appendChild(otherProducts[i]);
 }
}

/***/ }),

/***/ 330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ getCategoryProducts)
/* harmony export */ });
// getcategory products(category) async fetch where category = category
// getproduct info (name) async fetch where product name= name
//



async function getCategoryProducts(prodCategory) {
  // Define the API endpoint
  let products = [];
  let json = '../data.json';
  // Fetch JSON data from the API
  await fetch(json)
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
  
})
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
return products;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(255);
/******/ 	
/******/ })()
;