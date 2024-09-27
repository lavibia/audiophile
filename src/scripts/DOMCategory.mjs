// populate html dom with category products
//modify url
// import '../assets/*.jpg';

export function renderProductsList(list, wrapper) {
  // wrapper is category products
  let otherProducts = [];
  for (let i = 0; i < list.length; i++) {
    let articleDOM = document.createElement('article');
    articleDOM.classList.add('product__preview');
    // img section
    let pictureDOM = document.createElement('picture');

    pictureDOM.innerHTML = `
            <source
              media="(max-width: 35.74rem)"
              srcset=".${list[i].categoryImage.mobile}"
              width="100%"
              height="auto"
            />
            <source
              media="(max-width: 62.4rem)"
              srcset='.${list[i].categoryImage.tablet}'
              width="100%"
              height="auto"
            />
            <source
              media="(min-width: 62.4rem)"
              srcset='.${list[i].categoryImage.desktop}'
              width="100%"
              height="auto"
            />
            <img src=".${list[i].categoryImage.mobile}" alt="" />

  `

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


    //button
    let btnDOM = document.createElement('a');
    btnDOM.classList.add('btn__pink');
    btnDOM.classList.add('subtitle');
    btnDOM.setAttribute('href', `product.html?title=${list[i].slug}`);
    btnDOM.textContent = 'See Product';

    wrapperText.appendChild(btnDOM);





    articleDOM.appendChild(pictureDOM);
    articleDOM.appendChild(wrapperText);

    if (wrapperText.childElementCount === 4) {
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