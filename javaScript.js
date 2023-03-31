// console.log("I am connected to the html file");

const displayForm = document.getElementById("showForm");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const numOfPages = document.getElementById("numOfPages");
const haveReadOrNot = document.getElementById("haveRead");
const submitBook = document.getElementById("submitBook");
const clearButton = document.getElementById("clear");

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
  title = bookTitle.value;
  author = bookAuthor.value;
  pages = numOfPages.value;
  if (haveReadOrNot.checked) {
    read = "Read";
  } else {
    read = "Have Not Read";
  }

  let nextBook = new Book(title, author, pages, read);

  myLibray.push(nextBook);
}

function clearForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  numOfPages.value = "";
  if (haveReadOrNot.checked) {
    haveReadOrNot.checked = false;
  }
}

submitBook.addEventListener("click", (e) => {
  //   console.log("am I working?");
  addBookToLibrary();
  clearForm();
});

clearButton.addEventListener("click", (e) => {
  clearForm();
});

function displayCard() {
  //display each book
  //Loop!
  //create div for each book
  //in the div display info (how will it be displayed?)
}
