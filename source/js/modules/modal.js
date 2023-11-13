const modalOpenElements = document.querySelectorAll('[data-open-modal]');
const modalCloseElements = document.querySelectorAll('[data-close-modal]');
const modals = document.querySelectorAll('.modal');
const modalItems = document.querySelectorAll('.modal__item');


function prepareOpening() {
  modals.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });
}

function prepareClosing() {
  modals.forEach((el) => {
    el.classList.remove('is-active');
  });
  modalItems.forEach((el) => {
    el.classList.remove('is-active');
  });
}

function initModal() {
  prepareOpening();
  modalOpenElements.forEach((el) => {
    let currentEl = el;
    let modalId = currentEl.getAttribute('data-modal-id');
    let currentModal = document.querySelector(modalId);
    let itemId = currentEl.getAttribute('data-item-id');
    let currentItem = document.querySelector(itemId);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      currentModal.classList.add('is-active');
      if (currentItem) {
        currentItem.classList.add('is-active');
      }
    });
  });

  modalCloseElements.forEach((el) => {
    el.addEventListener('click', () => {
      prepareClosing();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      prepareClosing();
    }
  });
}

export {initModal};
