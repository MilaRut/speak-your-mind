const triggers = document.querySelectorAll('.js-dropdown-trigger');

function showDropdownList() {
  triggers.forEach((el) => {
    let currentEl = el;
    let dataId = currentEl.getAttribute('data-id');
    let currentList = document.querySelector(dataId);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (!currentList.classList.contains('is-active')) {
        currentList.classList.add('is-active');
        currentEl.classList.add('is-active');
      } else {
        currentList.classList.remove('is-active');
        currentEl.classList.remove('is-active');
      }
    });
    document.addEventListener('click', (e) => {
      if (currentList.classList.contains('is-active') && e.target !== el && !el.contains(e.target)) {
        currentList.classList.remove('is-active');
        currentEl.classList.remove('is-active');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        currentList.classList.remove('is-active');
        currentEl.classList.remove('is-active');
      }
    });
  });
}

export {showDropdownList};
