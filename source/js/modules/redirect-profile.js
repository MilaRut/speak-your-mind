const userBtn = document.querySelector('.logged__btn');
const isTherapist = localStorage.getItem('is_therapist') === 'true';

function redirectToProfile() {
  if (!userBtn) {
    return;
  }

  userBtn.addEventListener('click', () => {
    if (isTherapist) {
      window.location.href = '/doctor-account-sessions.html';
    } else {
      window.location.href = '/user-account-main.html';
    }
  });
}

export {redirectToProfile};
