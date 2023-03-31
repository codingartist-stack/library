console.log("I am connected to the html file");

const displayForm = document.getElementById("showForm");

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
}
