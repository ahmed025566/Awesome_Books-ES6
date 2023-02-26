import { UI, addNewBook } from './modules/library.js';
import { displayAdd, displayContact, displayList } from './modules/display sections.js';

const add = document.querySelector('.add');
const list = document.getElementById('list');
const addNew = document.getElementById('add-book');
const contact = document.getElementById('contact');

list.addEventListener('click', displayList);
addNew.addEventListener('click', displayAdd);
contact.addEventListener('click', displayContact);
add.addEventListener('click', addNewBook);
window.addEventListener('DOMContentLoaded', () => {
  UI.displayData();
  UI.removeBook();
  displayList();
});