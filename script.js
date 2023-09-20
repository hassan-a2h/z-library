const booksContainer = document.querySelector('.books');


const newBook = (bookTitle, authorName, pages, status) => {
  return { bookTitle, authorName, pages, status };
}
class Library {
  #books = [];
  #name = '';

  constructor(name = 'Library') {
    this.#name = name;
  }

  newBook(bookTitle, authorName, noOfPages = 200, readStatus = false) {
    if (!bookTitle || !authorName) {
      throw new Error("Author Name or Book Title empty");
    }

    this.#books.push(newBook(bookTitle, authorName, noOfPages, readStatus));
    console.log('New Book Added');
  }

  showBooks() {
    booksContainer.innerHTML = '';
    
    this.#books.forEach((book, index) => {
      const div = document.createElement('div');
      const bookTitle = document.createElement('p');
      const authorName = document.createElement('p');
      const bookPages = document.createElement('p');
      const readStatus = document.createElement('p');
      const deleteButton = document.createElement('button');

      deleteButton.setAttribute('data-index', index);
      deleteButton.addEventListener('click', 
      () => this.removeBook(index));

      bookTitle.innerText = `Title: ${book.bookTitle}`;
      authorName.innerText = book.authorName;
      bookPages.innerText = book.pages;
      readStatus.innerText = book.status ? 'Read' : 'Not Read';
      deleteButton.innerText = 'Remove';

      div.appendChild(bookTitle);
      div.appendChild(authorName);
      div.appendChild(bookPages);
      div.appendChild(readStatus);
      div.appendChild(deleteButton);

      booksContainer.appendChild(div);
    });
  }

  removeBook(index) {
    this.#books.splice(index, 1);
    console.log('Book removed');
    console.table(this.#books);
    this.showBooks();
  }
}

const fsd = new Library('Faisalabad');
fsd.newBook('Dad', 'God', 100, true);
fsd.newBook('Mom', 'God', 200, false);
fsd.showBooks();