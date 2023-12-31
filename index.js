const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
const array = books.map((books)=> ({author:books.authorFirst + " " + books.authorLast, book:books.name}))
console.log(array);
//"--- wrote --- in ---"
books.forEach((books)=> console.log(books.authorFirst  + " " + books.authorLast  +  " wrote " + books.name + " in "  +  books.publishDate));
//Sort books from oldest to most recent
const sorted = books.toSorted((a,b)=> a.publishDate - b.publishDate)
console.log(sorted);
//sort books alphabetically
console.log(books.toSorted((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}));
//Find who wrote War and Peace
function waronly(read) {
  return read.authorFirst === "Leo";
}
console.log(books.find(waronly));
//how many books were written before 1900?
const oldbooks = books.filter(function(old) {
  return old.publishDate < 1900
});
console.log(oldbooks);
//was there at least one book published within the last 100 years?
const date = new Date();
const year = date.getFullYear();
function recent(books){
  return year - books.publishDate <= 100
}
console.log(books.some(recent));
//was every book published within the last 100 years?
function outofdate(books){
  return year - books.publishDate >= 100
}
console.log(books.every(outofdate));
//print a list of books that "includes" the genre historical
const flattenedbooks = books.flat();
const historybooks = flattenedbooks.filter(function(books){
  return books.genre.includes("historical")
});
historybooks.forEach((books)=> console.log(books));



