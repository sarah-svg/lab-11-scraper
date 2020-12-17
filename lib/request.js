const fetch = require('node-fetch');

const { JSDOM } = require('jsdom');


module.exports = () => {
  return fetch('http://books.toscrape.com/catalogue/page-2.html')
    .then((res) => res.text())
    .then((html) => new JSDOM(html))
    .then((DOM) => DOM.window.document);
};
