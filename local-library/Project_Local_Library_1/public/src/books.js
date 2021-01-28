//return the author with matching id
function findAuthorById(authors, id) {
  //2 parameters: array of authors, id of a single author
  //.find function to find author object with matching id
  let found = authors.find(author => author.id === id);
  //return found author
  return found;
}

//returns book with matching id
function findBookById(books, id) {
  //2 parameters: array of books, id of single book
  //.find function to find book object with matching id
  let found = books.find(book => book.id === id);
  //return found book
  return found;
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
