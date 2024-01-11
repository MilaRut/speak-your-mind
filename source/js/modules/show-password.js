const showPswdBtn = document.querySelector('.show-password-btn');
const inputPswd = document.querySelector('input[type="password"]');

function togglePassword() {
  const inputType = inputPswd.getAttribute('type');
  if (inputType === 'password') {
    inputPswd.setAttribute('type', 'text');
    showPswdBtn.textContent = 'Скрыть пароль';
  } else {
    inputPswd.setAttribute('type', 'password');
    showPswdBtn.textContent = 'Показать пароль';
  }
}

function showPassword() {
  if (showPswdBtn) {
    showPswdBtn.addEventListener('click', function () {
      togglePassword();
    });
  }
}

export {showPassword};
