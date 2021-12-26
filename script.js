'use strict';

const modals = document.querySelectorAll('.modal');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');

const addCloseFunction = (target, modal) => {
  target.addEventListener('click', (e) => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  })
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', (e) => {
    modals[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
  addCloseFunction(btnsCloseModal[i], modals[i]);
  addCloseFunction(overlay, modals[i]); // close the modal by clicking on anything outside it

  // close the modal by pressing 'esc'
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modals[i].classList.contains('hidden')) {
      modals[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  })
}
