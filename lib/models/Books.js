const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  coverImage;
  bookRating;
  inStock;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.coverImage = row.cover_image;
    this.bookRating = row.book_rating;
    this.inStock = row.in_stock;
  }

  // INSERT
  static async insert(data) {
    const { rows } = await pool.query(
      `
    INSERT INTO books (title, cover_image, book_rating, in_stock) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
      [data.title, data.coverImage, data.bookRating, data.inStock]
    );

    return new Book(rows[0]);
  }
};


