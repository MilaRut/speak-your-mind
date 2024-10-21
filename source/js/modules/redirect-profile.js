const userBtn = document.querySelector('.logged__btn');
const isTherapist = localStorage.getItem('is_therapist') === 'true';
const userForm = localStorage.getItem('user_form');

function redirectToProfile() {
  if (!userBtn) {
    return;
  }

  userBtn.addEventListener('click', () => {
    if (isTherapist) {
      window.location.href = '/doctor-account-sessions.html';
    } else {
      if (userForm === 'empty') {
        window.location.href = '/user-signup-main.html';
      } else {
        window.location.href = '/user-account-main.html';
      }
    }
  });
}

export {redirectToProfile};
