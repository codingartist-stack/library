console.log('I am connected to the html file');

const displayForm = document.getElementById('showForm');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const numOfPages = document.getElementById('numOfPages');
const bookisbn = document.getElementById('isbn');
const haveReadOrNot = document.getElementById('haveRead');
const submitBook = document.getElementById('submitBook');
const clearButton = document.getElementById('clear');
const bookCase = document.getElementById('bookCase');

displayForm.addEventListener('click', (e) => {
  document.getElementById('form_container').style.display = 'grid';
});

let myLibray = {
  9780261102217: new Book(
    'The Hobbit',
    'J.R.R. Tolkien',
    295,
    9780261102217,
    true
  ),
  9780064410342: new Book(
    `Howl's Moving Castle`,
    'Diana Wynne Jones',
    329,
    9780064410342,
    true
  ),
  9780140237498: new Book(
    'The Catcher in the Rye',
    'J.D. Salinger',
    214,
    9780140237498,
    true
  ),
  9788831004923: new Book(
    'The Boy, the Mole, the Fox and the Horse',
    'Charlie Mackesy',
    128,
    9788831004923,
    true
  ),
};

function Book(title, author, pages, isbn, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  };
}

function addBookToLibrary() {
  title = bookTitle.value;
  author = bookAuthor.value;
  pages = numOfPages.value;
  isbn = bookisbn.value;
  read = haveReadOrNot.checked;

  let nextBook = new Book(title, author, pages, isbn, read);

  myLibray.push(nextBook);
}

function clearForm() {
  bookTitle.value = '';
  bookAuthor.value = '';
  numOfPages.value = '';
  bookisbn.value = '';
  if (haveReadOrNot.checked) {
    haveReadOrNot.checked = false;
  }
}

submitBook.addEventListener('click', (e) => {
  //   console.log("am I working?");
  addBookToLibrary();
  clearForm();
  bookCase.innerHTML = '';
  displayBooks();
});

clearButton.addEventListener('click', (e) => {
  clearForm();
});

function displayBooks() {
  //display each book
  //Loop!
  //create div for each book (appendchild)
  //in the div display info (how will it be displayed?
  for (const book of Object.values(myLibray)) {
    const bookInfo = document.createElement('div');
    bookInfo.id = book.isbn;
    bookInfo.classList.add('bookDetails');
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Title: ${book.title}`;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    const bookisbn = document.createElement('p');
    bookisbn.textContent = `ISBN: ${book.isbn}`;
    const bookStatus = document.createElement('p');
    bookStatus.textContent = `Read Status: ${book.read}`;

    const changeReadStatus = document.createElement('button');
    changeReadStatus.textContent = `Change Read Status`;

    const removeBook = document.createElement('button');
    removeBook.textContent = 'Delete Book';

    bookCase.appendChild(bookInfo);
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    bookInfo.appendChild(bookisbn);
    bookInfo.appendChild(bookStatus);
    bookInfo.appendChild(changeReadStatus);
    bookInfo.appendChild(removeBook);

    changeReadStatus.addEventListener('click', (e) => {
      console.log('I was clicked');
      //Works... but won't toggle...
      if (book.read === true) {
        book.read = false;
        bookStatus.textContent = `Read Status: ${book.read}`;
      } else if (book.read === false) {
        book.read = true;
        bookStatus.textContent = `Read Status: ${book.read}`;
      }
    });

    removeBook.addEventListener('click', (e) => {
      // console.log(book);
      // bookInfo.classList.add('hideBook');

      myLibray.splice(index, 1);

      //   cardContainer.innerHTML = '';
      //   displayCard();
    });
  }

  //    for loop the C way
  //    for (let index = 0; index < myLibray.length; index++) {
  //     const book = myLibray[index];
  //     const bookInfo = document.createElement('div');
  //     bookInfo.classList.add('bookDetails');
  //     bookInfo.innerHTML = `<strong>Title: </strong> ${book.title} <br /><strong>Author: </strong> <br /><strong>Pages: </strong> <br />`;
  //     cardContainer.appendChild(bookInfo);
  //   }
}

displayBooks();
