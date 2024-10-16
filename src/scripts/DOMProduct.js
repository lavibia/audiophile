export function renderProductDetails(productInfo, wrapper) {
  // wrapper is product details
  // for (let i = 0; i < productInfo.length; i++) {
  let descriptionDOM = document.createElement('div');
  descriptionDOM.classList.add('product__description');
  // img section
  let pictureDOM = document.createElement('picture');

  pictureDOM.innerHTML = `
            <source
              media="(max-width: 35.74rem)"
              srcset=".${productInfo.image.mobile}"
              width="100%"
              height="auto"
            />
            <source
              media="(max-width: 62.4rem)"
              srcset='.${productInfo.image.tablet}'
              width="100%"
              height="auto"
            />
            <source
              media="(min-width: 62.4rem)"
              srcset='.${productInfo.image.desktop}'
              width="100%"
              height="auto"
            />
            <img src=".${productInfo.image.mobile}" alt="" />
  `
  descriptionDOM.appendChild(pictureDOM);
  // product desc info
  let wrapperText = document.createElement('div');
  wrapperText.classList.add('product__description__text')

  // new product text
  if (productInfo.new === true) {
    let newProdDOM = document.createElement('div');
    newProdDOM.classList.add('color__accent', 'overline');
    newProdDOM.textContent = 'New Product';
    wrapperText.appendChild(newProdDOM);
  }

  //title
  let titleDOM = document.createElement('h1');
  titleDOM.classList.add('h2');
  titleDOM.textContent = `${productInfo.name}`;
  wrapperText.appendChild(titleDOM);

  // description

  let descDOM = document.createElement('p');
  descDOM.textContent = productInfo.description;
  wrapperText.appendChild(descDOM);


  // form quantity
  let formDOM = document.createElement('form');
  formDOM.action = "#";
  formDOM.classList.add("product-quantity");
  formDOM.innerHTML = `<label for="quantity-value" class="visibily__hidden"
              >Quantity</label
            >
            <div class="quantity">
              <button
                type="button"
                class="minus"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <input
                type="number"
                class="input-box"
                id="quantity-value"
                value="1"
                min="1"
                max="10"
              />
              <button type="button" class="plus" 
              aria-label="Increase quantity">
                &plus;
              </button>
            </div>
            <button type="submit" class="btn__pink subtitle">Add to cart</button>`
  wrapperText.appendChild(formDOM);
  descriptionDOM.appendChild(wrapperText);

  wrapper.appendChild(descriptionDOM);

  //features
  let featuresWrapper = document.createElement('div');
  featuresWrapper.classList.add('product__features');
  let featTitle = document.createElement('h2');
  featTitle.classList.add('h3');
  featTitle.textContent = 'Features';


  let featText = document.createElement('p');
  featText.textContent = productInfo.features;


  featuresWrapper.appendChild(featTitle)
  featuresWrapper.appendChild(featText);

  wrapper.appendChild(featuresWrapper);


  // includes

  let includesWrapperDOM = document.createElement('div');
  let includeTitle = document.createElement('h2');
  includeTitle.classList.add('h3');

  includeTitle.textContent = 'in the box';
  includesWrapperDOM.appendChild(includeTitle);

  let includeList = document.createElement('ul');
  for (let i = 0; i < productInfo.includes.length; i++) {
    let itemDOM = document.createElement('li');
    itemDOM.innerHTML = `
<span class="include__quantity">${productInfo.includes[i].quantity}x</span>${productInfo.includes[i].item}
`
    includeList.appendChild(itemDOM);
  }

  includesWrapperDOM.appendChild(includeList);

  wrapper.appendChild(includesWrapperDOM);

  // galery product
  let orderGallery = ['first', 'second', 'third']
  let galleryDOM = document.createElement('div');
  galleryDOM.classList.add('product__details__gallery');
  for (let i = 0; i < orderGallery.length; i++) {
    let galleryPic = document.createElement('picture');
    galleryPic.innerHTML = `<source
              media="(max-width: 35.74rem)"
              srcset=".${productInfo.gallery[orderGallery[i]].mobile}"
              width="100%"
              height="auto"
            />
            <source
              media="(max-width: 62.4rem)"
              srcset='.${productInfo.gallery[orderGallery[i]].tablet}'
              width="100%"
              height="auto"
            />
            <source
              media="(min-width: 62.4rem)"
              srcset='.${productInfo.gallery[orderGallery[i]].desktop}'
              width="100%"
              height="auto"
            />
            <img src=".${productInfo.gallery[orderGallery[i]].mobile}" alt="" />
  `;
    galleryDOM.appendChild(galleryPic);
  }
  wrapper.appendChild(galleryDOM);

  //you may also like

  let othersLikeDOM = document.createElement('div');
  othersLikeDOM.classList.add("others__like")
  //title
  let othersLikeTitle = document.createElement('h2');
  othersLikeTitle.classList.add('h3');
  othersLikeTitle.textContent = "You may also like";
  othersLikeDOM.appendChild(othersLikeTitle);


  //others list
  let othersList = document.createElement('ul');
  for (let i = 0; i < productInfo.others.length; i++) {
    let otherItem = document.createElement('li');
    otherItem.classList.add("other__like__card")
    //image for item you may like
    let othersLikeImg = document.createElement('picture');
    othersLikeImg.innerHTML = `<source
              media="(max-width: 35.74rem)"
              srcset=".${productInfo.others[i].image.mobile}"
              width="100%"
              height="auto"
            />
            <source
              media="(max-width: 62.4rem)"
              srcset='.${productInfo.others[i].image.tablet}'
              width="100%"
              height="auto"
            />
            <source
              media="(min-width: 62.4rem)"
              srcset='.${productInfo.others[i].image.desktop}'
              width="100%"
              height="auto"
            />
            <img src=".${productInfo.others[i].image.mobile}" alt="" />`
    otherItem.appendChild(othersLikeImg);
    //name for item you may like
    let otherLikeName = document.createElement('h3');
    otherLikeName.classList.add('h5');
    otherLikeName.textContent = productInfo.others[i].name;
    otherItem.appendChild(otherLikeName);


    // see link for item you may like
    let otherLikeBtn = document.createElement('a');
    otherLikeBtn.classList.add('btn__pink');
    otherLikeBtn.classList.add('subtitle');
    otherLikeBtn.setAttribute('href', `product.html?title=${productInfo.others[i].slug}`);
    otherLikeBtn.textContent = 'See Product';
    otherItem.appendChild(otherLikeBtn);

    //add item to list
    othersList.appendChild(otherItem);
  }
  othersLikeDOM.appendChild(othersList);
  wrapper.appendChild(othersLikeDOM);




}