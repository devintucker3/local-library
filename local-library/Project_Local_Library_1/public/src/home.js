// to bring in function from another js file
const{findAuthorById} = require("./books")

// return total number of books
function totalBooksCount(books) {
  // parameter: array of books
  // set total variable
  let total = 0;
  // loop through book
  for (let i = 0; i < books.length; i++) {
    // add to total for every book
    total++;
  }
  // return total number of book objects in books array
  return total;
}

// return total number of accounts
function totalAccountsCount(accounts) {
  // array of accounts
  // set total variable
  let total = 0;
  // loop through accounts
  for (let i = 0; i < accounts.length; i++) {
    // add to total for every account
    total++;
  }
  // return total number of account objects in accounts array
  return total
}

// returns total number of books borrowed
function booksBorrowedCount(books) {
  // parameter: array of books
  // .reduce function: add integer 0 at end with counter for first argument and book element as second 
  let result = books.reduce((acc, element) => {
    // variable for returned book property
    let returns = element.borrows[0].returned;
    // if not returned, add to counter 
    if (!returns) acc++; 
    // return counter
    return acc; 
  }, 0);
  // return total 
  return result;
}

// array of most common genres (top 5 most common to least)
function getMostCommonGenres(books) {
  // parameter: array of books.
  //set arr and obj variables
  const obj = {};
  // loop through books
  books.forEach(book => {
    // add genre to obj with counter for each
    obj[book.genre] ? obj[book.genre]++ : obj[book.genre] = 1;
  });
  // each object in the returned array has 'name w genre' and 'count: total books with genre' key:
  let newArr = _newObjectstoArray(obj)
  // 5 objects or less of common genres, .sort most common to least
  return _sortAndSlice(newArr, 5);
}

// return array of most popular books (how often they are borrowed)
function getMostPopularBooks(books) {
  // array of books
  // set obj and arr variables
  const arr = [];
  // loop through books
  books.forEach(book => {
    // get length of borrows for each book
    const count = book.borrows.length;
    // set book title to variable
    const name = book.title;
    // push variables into array as joined object
    arr.push({name, count});
  })
  // return array above with top 5 books most popular to least
  return _sortAndSlice(arr, 5);
}

// returns array of most popular authors (top 5 based on books checked out)
function getMostPopularAuthors(books, authors) {
  // set array variable
  let returnArr = [];
  // loop through authors array
  authors.forEach(author => {
    // define object with name and count in it
    let returnAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    // loop through books array
    books.forEach(book => {
      // if author ids match
      if (book.authorId === author.id) {
        // add number of borrows for books to author count key
        returnAuthor.count += book.borrows.length
      }
    })
    // push author objects into array
    returnArr.push(returnAuthor)
  })
  // return array of popular authors (.sort and .slice function)
  return _sortAndSlice(returnArr, 5)
}
/*
***** Had another way of doing this function that technically worked and everyone in my group 
agreed it was similar to theirs, but the tests didn't like it so someone from ThinkChat gave 
a different answer for me to walk through.
*/


// HELPER FUNCTIONS
//slice and sort helper function
function _sortAndSlice(array, length) {
  // sorts 5 elements greatest to least
  return array.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, length);
}

// make keys and values into objects that is put into new array
function _newObjectstoArray(object) {
  let arr = [];

  for (let i = 0; i < Object.keys(object).length; i++) {
    // variables for object key and count
    let name = Object.keys(object)[i];
    let count = Object.values(object)[i];
    // add shorthand variables to array
    arr[i] = { name , count };
  }
  return arr;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
