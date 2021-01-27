function findAccountById(accounts, id) {
  // 2 parameters: accounts, id
  // .find function to return single object
  let result = accounts.find(account => account.id === id);
  // return matching array as object
  return result;
}

function sortAccountsByLastName(accounts) {
  // parameter: accounts
  // sorted array of objects by last name
  // .sort function to sort last names alphabetically
  let result = accounts.sort((nameA, nameB) => {
    //compare A to Z of 2 properties
    // return array of objects
     return nameA.name.last < nameB.name.last ? -1 : 1;
  });
  // return accounts by last name in sorted array
  return result;
}

function numberOfBorrows(account, books) {
  // 2 parameters: account object, array of all books
  // number of times an account id appear in books borrow array
  // .reduce function with 
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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
