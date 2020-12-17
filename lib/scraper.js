
const parser = require('./parser');
const request = require('./request');
const store = require('./store');

request()
  .then((document) => parser(document))
  .then((products) => store(products))
  .then((data) => console.log('num of books', data.length));
