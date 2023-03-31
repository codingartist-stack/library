// console.log("I am connected to the html file");

const displayForm = document.getElementById("showForm");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const numOfPages = document.getElementById("numOfPages");
const haveReadOrNot = document.getElementById("haveRead");
const submitBook = document.getElementById("submitBook");

displayForm.addEventListener("click", (e) => {
  document.getElementById("form_container").style.display = "grid";
});

let myLibray = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: "Read" },
  {
    title: "Howl's Moving Castle",
    author: "Diana Wynne Jones",
    pages: 329,
    read: "Read",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214,
    read: "Read",
  },
  {
    title: "The Boy, the Mole, the Fox and the Horse",
    author: "Charlie Mackesy",
    pages: 128,
    read: "Read",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

function addBookToLibrary() {
  //do stuff here
  //when submit it clicked  should this be a different function?
  //title value =title
  //author value = title
  //pages value = pages
  //if haveRead is checked read = Read
  //if haveRead is not checked read = Have not read
  //create new book const newbook = new Book(title, author, pages, read)
  //push new book to myLibrary
  console.log(bookTitle.value);
  title = bookTitle.value;
  bookAuthor.value = author;
  numOfPages.value = pages;
  if ((haveReadOrNot = true)) {
    read = "Read";
  } else {
    read = "Have Not Read";
  }

  const nextBook = new Book(title, author, pages, read);

  myLibray.push(nextBook);
}

submitBook.addEventListener("click", (e) => {
  console.log("am I working?");
  addBookToLibrary();
});

function displayCard() {
  //display each book
  //first create a table?
  //would like to make cards and use grid flex to lay them out.
}
