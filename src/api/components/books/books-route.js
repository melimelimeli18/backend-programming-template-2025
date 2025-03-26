const express = require('express');

const booksController = require('./books-controller');
const booksService = require('./books-service');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  // TODO: Get a book by id
  // GET http://localhost:5000/api/books?offset=25&limit=10
  // route.get('/', booksService.getBooks);
  route.get('/', booksController.getBooks);

  // TODO: Update a book by id

  // TODO: Delete a book by id
};
