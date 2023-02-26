export default class Storage {
  static addToStorage(books) {
    const storage = localStorage.setItem('books', JSON.stringify(books));
    return storage;
  }

  static getFromStorage() {
    const storage = localStorage.getItem('books') === null
      ? [] : JSON.parse(localStorage.getItem('books'));
    return storage;
  }
}