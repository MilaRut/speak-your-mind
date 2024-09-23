const logoutBtns = document.querySelectorAll('#logout-btn');

function logOut() {
  if (!logOut) {
    return;
  }
  logoutBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // localStorage.removeItem('token');
      localStorage.clear();
      window.location.href = '/index.html';
    });
  });
}

export {logOut};
