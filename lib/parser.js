

module.exports = (document) => {
  const products = document.querySelectorAll('.product_pod');

  return [...products].map((product) => ({
    title: product.querySelector('.product_pod > h3 > a').textContent,
    coverImage: product.querySelector('.thumbnail').currentSrc,
    bookRating: product
      .querySelector('.star-rating')
      .classList[1].toLowerCase(),
    inStock: !product.querySelector('p.instock').innerText,
  }));
};
