const studentsModal = document.querySelector('[data-students-modal]');
const students = document.querySelector('[students-modal-open');
const closeStudentsBtn = document.querySelector('[students-modal-close]');

students.addEventListener('click', toggleStudentsModal);

function toggleStudentsModal() {
  studentsModal.classList.toggle('is-hidden');
}
function closeStudentsModal(event) {
  if (
    !studentsModal.classList.contains('is-hidden') &&
    !studentsModal.contains(event.target)
  ) {
    toggleStudentsModal();
    document.removeEventListener('click', closeStudentsModal);
  }
}
