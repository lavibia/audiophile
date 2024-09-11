/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --dark-pink: hsl(22, 65%, 57%);
  --dark-gray: hsl(0, 0%, 6%);
  --light-gray: hsl(0, 0%, 95%);
  --off-white: hsl(0, 0%, 98%);
  --light-pink: hsl(21, 94%, 75%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --gray: hsl(0, 0%, 40%);
  --header-height: 90px;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
/* done */
body {
  margin: 0 auto;
  font-family: 'Manrope', sans-serif;
  font-size: 0.937rem;
  line-height: 1.56rem;
  max-width: 100rem;
  background-color: var(--white);
}
/* done */
.h1 {
  font-weight: 700;
  font-size: clamp(
    2.25rem,
    calc(2.25rem + ((1vw - 0.405rem) * 5.6818)),
    3.5rem
  );
  /* min-height: 0vw; */
  text-transform: uppercase;
  line-height: 3.625rem;
  letter-spacing: 2px;
}

/* done */
.h2 {
  font-weight: 700;
  font-size: clamp(
    1.75rem,
    calc(1.75rem + ((1vw - 0.405rem) * 3.4091)),
    2.5rem
  );
  text-transform: uppercase;
  line-height: 2.75rem;
  letter-spacing: 1.5px;
}

/* done */
.h3 {
  font-weight: 700;
  font-size: clamp(1.5rem, calc(1.5rem + ((1vw - 0.405rem) * 2.2727)), 2rem);
  text-transform: uppercase;
  line-height: 2.25rem;
  letter-spacing: 1.15px;
}

/* done */
.h4 {
  font-weight: 700;
  font-size: 1.75 rem;
  text-transform: uppercase;
  line-height: 2.375rem;
  letter-spacing: 2px;
}
/* done */

.h5 {
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 2.06rem;
  letter-spacing: 1.7px;
}
/* done */
.h6 {
  font-weight: 700;
  font-size: clamp(
    0.937rem,
    calc(0.937rem + ((1vw - 0.405rem) * 0.8545)),
    1.125rem
  );
  text-transform: uppercase;
  line-height: 1.5rem;
  letter-spacing: 1.3px;
}
/* done */
.overline {
  font-weight: 400;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1.187rem;
  letter-spacing: 10px;
  color: var(--gray);
}
/* done */
.subtitle {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.812rem;
  line-height: 1.56rem;
  letter-spacing: 1px;
  /* color: var(--dark-pink); */
}

button {
  background: none;
  border: none;
}

.btn__pink {
  align-content: center;
  padding: 10px 30px;
  width: fit-content;
  background-color: var(--dark-pink);
  color: var(--white);
  transition: background-color 0.25s ease-in-out;
}

.btn__pink:hover {
  background-color: var(--light-pink);
}

.btn__black {
  min-height: 48px;
  align-content: center;
  padding: 10px 30px;
  width: fit-content;
  border: 1px solid var(--black);
  background: none;
  color: var(--black);
  transition: background-color 0.25s ease-in-out;
}

.btn__black:hover {
  background-color: var(--black);
  color: var(--white);
}

.btn__category {
  font-size: 0.812rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-content: space-between;
  padding: 0;
  color: var(--gray);
  transition: color 0.25s ease-in-out;
}

.btn__category:hover {
  color: var(--dark-pink);
}

.btn__category > img {
  margin-inline-start: 13px;
}

a {
  text-decoration: none;
  color: var(--white);
}

.uppercase {
  text-transform: uppercase;
}

/* ********************* HEADER ***************** */
header.home__header {
  background: none;
  grid-area: 1/1/2/2;
}

header {
  height: fit-content;
  background-color: var(--black);
  height: var(--header-height);
  padding: 24px;
  width: 100%;
  max-width: 100rem;
}

section,
footer {
  padding: 24px;
  width: 100%;
  max-width: 100rem;
}

.header__wrapper {
  max-width: 69rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

ul {
  list-style: none;
}

.desktop__nav {
  display: none;
}

.mobile__nav {
  display: none;
  position: absolute;
  left: 0px;
  top: 90px;
  width: 100vw;
  min-height: calc(100% - var(--header-height));
  background-color: rgba(0, 0, 0, 0.575);
}

.nav__wrapper {
  position: absolute;
  width: 100%;

  background-color: var(--white);
  padding: 50px 0px;
}

.nav__wrapper > ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile__nav .category__card {
  min-height: 12.5rem;
  /* 200px */
  padding: 24px;
  display: flex;
  align-items: flex-end;
}

.category__card__bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  position: relative;
  border-radius: 8px;
  min-height: 9.2rem;
  width: 100%;
  background-color: var(--light-gray);
}

.category__card__bg > * {
  margin-top: -72px;
}
.category__card__bg > img {
  height: 114px;
}

.divider {
  grid-area: 2/1/3/2;
  border-color: var(--dark-gray);
  width: min(100%, 69rem);
  margin: 0 auto;
}

/* **********Hero */
.hero__img__wrapper {
  display: grid;
  grid-template-rows: var(--header-height) 1px 1fr;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 100rem;
  /* background-color: var(--dark-gray); */
}
.home__hero {
  grid-area: 1/1/4/2;

  display: grid;
  grid-template-rows: var(--header-height) 1fr;
  grid-template-columns: 1fr 1fr;
  color: var(--white);
  min-height: 100%;
}
.content__wrapper {
  grid-area: 2/1/3/3;
  align-self: center;
  justify-self: center;
}
.home__hero picture {
  grid-area: 1/1/3/3;
  justify-self: center;
  align-self: center;
  margin: -25px -24px;
  display: block;
  z-index: -1;

  overflow-y: hidden;
}

.home__hero__text {
  display: flex;
  margin: auto 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
}
/* CAtegories */

.visibily__hidden {
  position: absolute;
  top: 0;
  left: -10000px;
  width: 1px;
  height: 1px;
}
.home__categories {
  padding-top: 40px;
}
.categories__wrapper ul {
  max-width: 69rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.categories__wrapper ul > li {
  margin-top: 50px;
}

/* Favorites */

.home__favorites > article {
  border-radius: 8px;
  max-width: 69rem;
  margin: 24px auto;
  overflow: hidden;
}

.home__favorites > .favorite__one {
  position: relative;
  padding: 55px 24px;
  background-color: var(--dark-pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  gap: 24px;
}
.favorite__one picture > img {
  height: 12.94rem;
}
.favorite__one .circles {
  display: block;
  position: absolute;
  top: -121px;

  width: 34.85rem;
  height: 34.85rem;
  /* 558px */
}
.fav__one__text {
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
}

.favorite__one h3 {
  width: 8ch;
  word-wrap: break-word;
  line-height: 2.5rem;
}

.favorite__one button {
  background-color: var(--black);
  border: none;
  color: var(--white);
  z-index: 10;
}
.favorite__one button:hover {
  background-color: var(--gray);
}

.home__favorites .favorite__two {
  min-height: 20rem;
  position: relative;
  padding: 55px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}
.favorite__two picture {
  display: block;
  position: absolute;
  right: 0px;
  margin-bottom: 0px;
  z-index: -1;
  align-self: center;
  width: fit-content;
  height: fit-content;
}
.favorite__two picture > img {
  min-height: 22.93rem;
  width: 100%;
}

.favorite__three picture > img {
  display: block;
  min-height: 13.75rem;
  width: 100%;
  border-radius: 8px;
}
.favorite__three {
  min-height: 26.5rem;
  flex-direction: column;
  display: flex;
  gap: 24px;
}
.favorite__three > .fav__three__text {
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  min-height: 13.75rem;
  border-radius: 8px;
  justify-content: center;
  gap: 32px;
  padding: 0px 24px;
}
/* About us */
.about__us {
  max-width: 100rem;
  margin: 24px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.about__us picture > img {
  display: block;
  min-height: 18.75rem;
  width: 100%;
  border-radius: 8px;
}
.about__us .h2 {
  letter-spacing: 1px;
  line-height: normal;
}
.about__text__wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.color__accent {
  color: var(--dark-pink);
}
.about__text {
  color: var(--gray);
}

/* Footer */

footer {
  padding-top: 0px;
  background-color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 48px;
  align-items: center;
  text-align: center;
}
/* footer > * {
  max-width: 69rem;
} */
.accent__line {
  height: 4px;
  width: 101px;
  background-color: var(--dark-pink);
  margin-top: 0;
}

footer a.subtitle {
  letter-spacing: 2px;
}

footer > nav > ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
footer > p {
  color: var(--gray);
}
.bold {
  font-weight: 700;
}
.filter__accent {
  filter: brightness(0) saturate(100%) invert(82%) sepia(41%) saturate(5719%)
    hue-rotate(326deg) brightness(90%) contrast(88%);
}

.socials img:hover {
  filter: brightness(0) saturate(100%) invert(82%) sepia(41%) saturate(5719%)
    hue-rotate(326deg) brightness(90%) contrast(88%);
}

nav a:hover {
  color: var(--dark-pink);
}

.socials {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.socials > li > a {
  display: block;
  line-height: 12px;
}
/* ***************************************************** 
            TABLET  STYLES
********************************************************
*/

@media only screen and (min-width: 40.6rem) /* 650px */ {
  header {
    padding-left: 40px;
    padding-right: 40px;
  }

  .header__wrapper {
    justify-content: flex-start;
    gap: 24px;
  }

  .header__wrapper > .cart {
    margin-left: auto;
  }

  .nav__wrapper {
    padding-left: 40px;
    padding-right: 40px;
  }

  .nav__wrapper > ul {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .nav__wrapper .category__card {
    padding-left: 0;
    padding-right: 0;
  }
  /* Hero */
  .content__wrapper {
    width: 50%;
  }

  /* Categories */

  .categories__wrapper ul {
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .categories__wrapper ul > li {
    width: 100%;
  }
  .home__categories {
    padding: 60px 40px;
  }

  /*  Favorites */
  .home__favorites {
    padding: 30px 40px;
  }
  .home__favorites > .favorite__one {
    gap: 40px;
  }
  .favorite__one picture > img {
    height: 14.81rem;
  }
  .favorite__one .circles {
    top: -280px;
    width: 59rem;
    height: 59rem;
    /* 944px */
  }
  .favorite__one .h1 {
    font-size: 3.5rem;
    width: 8ch;
    word-wrap: break-word;
    line-height: 3.625rem;
  }
  .favorite__one p {
    max-width: 50%;
  }
  .home__favorites .favorite__two {
    padding-left: 60px;
    gap: 32px;
  }
  .favorite__three picture {
    width: 50%;
  }
  .favorite__three picture > img {
    min-height: 20rem;
    width: 100%;
  }
  .favorite__three {
    flex-direction: row;
    justify-content: space-between;
    gap: 11px;
    min-height: 20rem;
    flex: 1;
  }
  .favorite__three > .fav__three__text {
    width: 50%;
    padding-left: 40px;
    gap: 32px;
  }

  /* about us */
  .about__us {
    padding: 30px 40px;
  }
  .about__us .h2 {
    font-size: 2.5rem;
  }
  .about__us .h2,
  .about__us .about__text {
    padding: 0px 60px;
  }

  /* footer */
  footer {
    position: relative;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, auto);
    align-items: center;
    text-align: left;
    gap: 28px;
  }
  footer .accent__line {
    position: absolute;
    top: 0;
    left: 40px;
  }
  footer .logo {
    grid-area: 1/1/4/3;
  }
  footer > nav {
    grid-area: 4/1/7/3;
  }
  footer > nav > ul {
    flex-direction: row;
  }
  footer > p {
    grid-area: 7/1/10/3;
  }
  footer .bold {
    grid-area: 10/1/13/2;
  }
  footer .socials {
    grid-area: 10/2/13/3;
    justify-self: end;
  }
}

/* 



*************************************************** 
            DESKTOP STYLES
******************************************************
*/
@media only screen and (min-width: 62.5rem) {
  header {
    display: flex;
    justify-content: center;
  }
  section,
  footer {
    width: 100%;
    max-width: 100rem;
  }
  /* nav a:hover {
    color: var(--dark-pink);
  } */
  .header__wrapper {
    width: 100%;
    justify-content: space-between;
    max-width: 69rem;
  }
  .content__wrapper {
    width: 100%;
    max-width: 69rem;
    margin: 0 auto;
  }

  .mobile__nav {
    display: none;
  }

  .nav__hamburger {
    display: none;
  }

  .desktop__nav {
    z-index: 1;
    display: block;
  }

  .desktop__nav ul {
    display: flex;
    justify-content: space-between;
    gap: 34px;
    flex-direction: row;
  }

  .header__wrapper > .logo {
    order: -1;
  }

  .header__wrapper > .cart {
    margin-left: 0;
  }
  /* Hero */

  .home__hero__text {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    text-align: left;
    width: 40ch;
  }

  /* Cateegories */
  .category__card__bg {
    min-height: 12.75rem;
    width: 100%;
  }
  .category__card__bg > img {
    height: 160px;
  }
  .categories__wrapper .category__card {
    min-height: 16.4rem;
    /* 263px */
    display: flex;
    align-items: flex-end;
  }
  .categories__wrapper {
    width: 100%;
  }

  .categories__wrapper ul {
    margin: 0 auto;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
  }
  .categories__wrapper ul > li {
    width: 100%;
    max-width: 69rem;
  }
  .home__categories {
    padding: 40px 40px;
  }
  /* favorites */
  .home__favorites > article {
    margin: 40px auto;
  }
  .favorite__three {
    flex-direction: row;
    gap: 30px;
    min-height: 20rem;
  }
  .home__favorites .favorite__one {
    position: relative;
    flex-direction: row;
    gap: 90px;
    padding: 0px 100px;
    text-align: left;
    min-height: 35rem;
  }
  .favorite__one picture > img {
    height: 30.81rem;
    width: auto;
  }
  .favorite__one picture {
    align-self: flex-end;
    margin-bottom: -20px;
    z-index: 1;
  }
  .fav__one__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .favorite__one .h1 {
    line-height: 58px;
  }
  .favorite__one p {
    min-width: 100%;
  }
  .favorite__one .circles {
    display: block;
    position: absolute;
    left: -170px;
    top: -35px;
    width: 59rem;
    height: 59rem;
    /* 944px */
  }

  /* about us */
  .about__us {
    min-height: 36.5rem;

    flex-direction: row-reverse;
    justify-content: center;
    gap: 125px;
    align-items: center;
    text-align: left;
    padding: 60px 40px;
    padding-bottom: 120px;
    margin: 0px auto;
  }
  .about__us picture {
    width: 33.75rem;
  }
  .about__text__wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 27.81rem;
  }
  .about__text__wrapper > .about__text,
  .about__text__wrapper > .h2 {
    padding: 0px;
  }
  .about__text__wrapper > .h2 {
    line-height: 44px;
  }
  .about__text__wrapper > .about__text {
    letter-spacing: 0px;
    line-height: 25px;
  }

  /* footer */
  footer {
    padding-left: clamp(40px, calc(2.5rem + ((1vw - 11.8px) * 57.1429)), 280px);
    padding-right: clamp(
      40px,
      calc(2.5rem + ((1vw - 11.8px) * 57.1429)),
      280px
    );
    padding-top: 75px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, auto);
    align-items: end;
    text-align: left;
    gap: 19px 0px;
  }
  footer .accent__line {
    position: absolute;
    top: 0;
    left: clamp(40px, calc(2.5rem + ((1vw - 11.8px) * 57.1429)), 280px);
  }
  footer .logo {
    align-self: baseline;
    grid-area: 1/1/5/2;
  }
  footer > nav {
    grid-area: 1/2/5/3;
    justify-self: end;
    align-self: baseline;
    width: fit-content;
  }
  footer > nav > ul {
    flex-direction: row;
  }
  footer > p {
    grid-area: 5/1/9/2;
  }
  footer .bold {
    grid-area: 9/1/13/2;
  }
  footer .socials {
    grid-area: 5/2/9/3;
    justify-self: end;
  }
}

/* **************************CATEGORIES************ */
.hero__black__wrapper {
  background-color: var(--black);
  width: 100%;
  max-width: 100rem;
  margin: 0px auto;
}
.headphones__hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height);
  padding: 0px 24px;
}
.headphones__hero .h2 {
  color: var(--white);
}

.category__products {
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  width: 100%;
  max-width: 69rem;
  margin: 64px auto;
}
article.product__preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}
article.product__preview > img {
  min-height: 22rem;
  width: 100%;
}
.product__preview > .product__preview__text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

/* *********************************************************
                       DESKTOP CATEOGRY
******************************************************* */
@media only screen and (min-width: 62.5rem) {
  article.product__preview:nth-child(odd) {
    flex-direction: row;
  }
  article.product__preview > img {
    min-height: 22rem;
    width: 50%;
  }
  article.product__preview:nth-child(even) {
    flex-direction: row-reverse;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/scripts/script.js



/******/ })()
;