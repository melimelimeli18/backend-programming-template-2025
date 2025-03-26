const booksService = require('./books-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBooks(request, response, next) {
  try {
    let { offset, limit } = request.query;
    // const books = await booksService.getBooks();

    offset = parseInt(offset, 10) || 0;
    limit = parseInt(limit, 10) || 10;

    const books = await booksService.getBooks(offset, limit);

    // return response.status(200).json(books);
    return response.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (error) {
    return next(error);
  }
}

async function createBook(request, response, next) {
  try {
    const { title } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    const book = await booksService.create(title);

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks,
  createBook,
};
