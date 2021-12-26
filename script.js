'use strict';

const modals = document.querySelectorAll('.modal');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', (e) => {
    console.log(`${e.currentTarget.textContent} clicked!`)
    modals[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
  btnsCloseModal[i].addEventListener('click', (e) => {
    modals[i].classList.add('hidden');
    overlay.classList.add('hidden');
  })
}
