const selects = document.querySelectorAll('select');
const hiddenInput = document.querySelectorAll('.other-input');

function showTextInput() {
  if (hiddenInput) {
    selects.forEach((select) => {
      const haveHiddenInput = select.nextElementSibling && select.nextElementSibling.classList.contains('other-input');
      select.addEventListener('change', function () {
        if (select.value === 'other' && haveHiddenInput) {
          select.nextElementSibling.classList.add('is-active');
        } else if (select.value !== 'other' && haveHiddenInput) {
          select.nextElementSibling.classList.remove('is-active');
        }
      });
    });
  }
}

export {showTextInput};
