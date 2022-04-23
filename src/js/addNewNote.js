import { refs } from './refsDOM';

refs.createNoteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modalForm.addEventListener('submit', addNewTask);

function toggleModal() {
  refs.modalOverlay.classList.toggle('open');
}

function addNewTask(e) {
  e.preventDefault();
  console.log(e.elements);

  toggleModal();
}
