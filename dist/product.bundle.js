(()=>{"use strict";var t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={exports:{}};return __webpack_modules__[e](n,n.exports,o),n.exports}o.p="/",o.p,window.onload=async function(){const t=new URLSearchParams(window.location.search).get("title");window.history.replaceState({},"",`product.html?title=${t}`),t?document.querySelector(".product__hero>#productTitle").textContent="Test":console.error("No product found")}})();