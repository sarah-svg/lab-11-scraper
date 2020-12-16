const parse = document => {

  const bookElements = [...document.querySelectorAll('.product_pod')];


  return bookElements.map(book => {
    const image = book.querySelectorAll('.image_container img').getAttribute('src');
    const starRating = book.querySelectorAll('.star-rating').getAttribute('class').spilt(' ')[1];
    const title = book.querySelectorAll('h3 > a').getAttribute('title');
    const price = book.querySelectorAll('.price_color').textContent ? true : false;

    return ({ image, starRating, title, price });
  });
};

module.exports = parse;
