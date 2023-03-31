// console.log("I am connected to the html file");

const displayForm = document.getElementById("showForm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("numOfPages");
const haveRead = document.getElementById("haveRead");
const submitBook = document.getElementById("submitBook");

displayForm.addEventListener("click", (e) => {
  document.getElementById("form_container").style.display = "grid";
});

let myLibray = [];

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
  //when submit it clicked
  //title value =title
  //author value = title
  //pages value = pages
  //if haveRead is checked read = I have read
  //if haveRead is not checked read = I have not read
  //create new book const newbook = new Book(title, author, pages, read)
  //push new book to myLibrary
}
