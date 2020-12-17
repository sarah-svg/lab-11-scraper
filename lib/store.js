const Book = require('./models/Books');


const store = books => {
  return Promise.all(
    books.map(book => Book.insert(book))
  );
};
// store();

module.exports = store;
