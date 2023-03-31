console.log("I am connected to the html file");

const displayForm = document.getElementById("showForm");

displayForm.addEventListener("click", (e) => {
  document.getElementsByClassName("form_container")[0].style.display = "grid";
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
