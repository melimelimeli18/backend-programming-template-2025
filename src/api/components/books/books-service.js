const booksRepository = require('./books-repository');
// const Books = require('../../../models/books-schema');
const Books = require('../../../models/books-schema');

async function getBooks(offset, limit) {
  // return booksRepository.getBooks();
  return Books.find().skip(offset).limit(limit);
}

async function create(title) {
  // return booksRepository.create(title);
  return Books.create({ title });
}

module.exports = {
  getBooks,
  create,
};
