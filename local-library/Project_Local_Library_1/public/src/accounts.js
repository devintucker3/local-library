// return matching id in array as object
function findAccountById(accounts, id) {
  // 2 parameters: accounts, id
  // .find function to return single object
  let result = accounts.find(account => account.id === id);
  //return result
  return result;
}

// sorted array of objects by last name
function sortAccountsByLastName(accounts) {
  // parameter: accounts
  // .sort function to sort last names alphabetically
  let result = accounts.sort((nameA, nameB) => {
    //compare A to Z of 2 properties
    // return array of objects
     return nameA.name.last < nameB.name.last ? -1 : 1;
  });
  // return accounts by last name in sorted array
  return result;
}

// number of times an account id appear in books borrow array
function numberOfBorrows(account, books) {
  // 2 parameters: account object, array of all books
  // .reduce function with parameter: accumulator, borrows array, integer value
  let result = books.reduce((acc, {borrows: borrowArr}) => {
    // get array of ids for borrowArr
    let borrowed = borrowArr.map(element => element.id);
    // loop through array of ids
    borrowed.forEach(element => {
      // if matches account, add to accumulator
      if (element === account.id) acc++;
      //return acc
      return acc;
    });
    // return total accumulator
    return acc;
  // set to 0 for integer
  }, 0);

  // returns number
  return result;
}

//return array of books checked out by account
function getBooksPossessedByAccount(account, books, authors) {
  // 3 parameters: given account, array of book objects, array of author objects
  // match account id if book isn't returned
  // books possessed have authors in them
  // filter books borrowed to return array
  const theBook = books
    .filter((book) => {
      const currentBook = book.borrows[0];
      // return if borrow.returned === false AND account id with checked out book === account id
      return !currentBook.returned && currentBook.id === account.id;
    })
    // array with new values of author added to array
    .map((book) => {
      // find author id equal to authorId in books array
      const author = authors.find((author) => {
        return author.id === book.authorId;
      });
      // return filtered array of objects with spreaded book object and author name 
      return { ...book, author };
    });
  // return array of books matching account
  return theBook;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
