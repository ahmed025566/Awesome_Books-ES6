import displayDate from './display date.js';

export const displayList = () => {
  const addNew = document.querySelector('.add-section');
  addNew.classList.add('display-none');
  const contact = document.querySelector('.Contact-section');
  contact.classList.add('display-none');
  const list = document.querySelector('.books');
  list.classList.remove('display-none');
  const intro = document.getElementById('intro');
  intro.innerHTML = 'All Awesome Books';
  displayDate.display();
};

export const displayAdd = () => {
  const list = document.querySelector('.books');
  list.classList.add('display-none');
  const contact = document.querySelector('.Contact-section');
  contact.classList.add('display-none');
  const addNew = document.querySelector('.add-section');
  addNew.classList.remove('display-none');
  const intro = document.getElementById('intro');
  intro.innerHTML = 'Add a new book';
  displayDate.display();
};

export const displayContact = () => {
  const list = document.querySelector('.books');
  list.classList.add('display-none');
  const contact = document.querySelector('.Contact-section');
  contact.classList.remove('display-none');
  const addNew = document.querySelector('.add-section');
  addNew.classList.add('display-none');
  const intro = document.getElementById('intro');
  intro.innerHTML = 'Conatct Information';
  displayDate.display();
};