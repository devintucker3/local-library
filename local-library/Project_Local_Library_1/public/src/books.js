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

// return an array of 2 arrays: first array has books loaned out, second array of books returned
function partitionBooksByBorrowedStatus(books) {
  // parameter: array of books
  // make array for borrowed books
  let borrowed = books.filter(book =>
    book.borrows[0].returned === false);
  // make array for returned books 
  let returned = books.filter(book =>
    book.borrows[0].returned === true);
  // make array for both arrays above
  return [borrowed, returned];
}

// return array of transactions in the books 'borrow' key AND include account info with returned key
function getBorrowersForBook(book, accounts) {
  // 2 parameter: book object, array of accounts
  // loop over borrows in book
  let result = [];
  // if borrows.id === accounts.id, add account info to borrows
  book.borrows.forEach(element => {
    let act = accounts.find(account => account.id === element.id);
    result.push({
      ...element, 
      ...act
    });
  });
  // return array of accounts that borrowed book up to 10 accounts
  return result.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
