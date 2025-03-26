const { Books } = require('../../../models');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

// async function update(id, title) {}

module.exports = {
  getBooks,
  create,
};
