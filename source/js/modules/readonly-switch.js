const editBtns = document.querySelectorAll('.settings__edit-btn');

function toggleAttribute(inp, btn) {
  const language = localStorage.getItem('language') || 'en';

  const texts = {
    en: {
      apply: 'Apply',
      edit: 'Edit',
    },
    ru: {
      apply: 'Применить',
      edit: 'Редактировать',
    },
    hu: {
      apply: 'Alkalmaz',
      edit: 'Szerkesztés',
    },
  };

  if (inp.hasAttribute('readonly')) {
    inp.removeAttribute('readonly');
    btn.textContent = texts[language].apply;
  } else {
    inp.setAttribute('readonly', '');
    btn.textContent = texts[language].edit;
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
