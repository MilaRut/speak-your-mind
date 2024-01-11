const editBtns = document.querySelectorAll('.settings__edit-btn');

function toggleAttribute(inp, btn) {
  if (inp.hasAttribute('readonly')) {
    inp.removeAttribute('readonly');
    btn.textContent = 'Применить';
  } else {
    inp.setAttribute('readonly', '');
    btn.textContent = 'Редактировать';
  }
}

function switchReadonly() {
  if (editBtns) {
    editBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const currentInput = btn.closest('label').querySelector('input');
        toggleAttribute(currentInput, btn);
      });
    });
  }
}

export {switchReadonly};
