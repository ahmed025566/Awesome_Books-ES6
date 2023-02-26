import Storage from './storage.js';
import Book from './book.js';

const booksDiv = document.querySelector('.books');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

let books = Storage.getFromStorage();
let count = 1;

export class UI {
  static displayData() {
    booksDiv.innerHTML = '';
    books.forEach((book) => {
      const div = document.createElement('div');
      div.className = 'book';
      if (book.count % 2 === 0) {
        div.classList.add('gray');
      }
      div.setAttribute('data-id', book.id);
      const text = document.createElement('p');
      text.append(document.createTextNode(book.title));
      text.append(document.createTextNode(' by '));
      text.append(document.createTextNode(book.author));
      div.append(text);
      const remove = document.createElement('button');
      remove.className = 'remove';
      remove.appendChild(document.createTextNode('Remove'));
      div.appendChild(remove);

      booksDiv.append(div);
    });
  }

  static removeBook() {
    booksDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
      }
      this.deleteBook(e.target.parentElement.getAttribute('data-id'));
    });
  }

  static deleteBook(bookID) {
    books = books.filter((book) => book.id !== +bookID);

    Storage.addToStorage(books);
  }
}

export const addNewBook = () => {
  if (title.value !== '' && author.value !== '') {
    const id = Date.now();
    const book = new Book(id, title.value, author.value, count);
    books.push(book);
    title.value = '';
    author.value = '';
    UI.displayData();
    Storage.addToStorage(books);
    count += 1;
  }
};