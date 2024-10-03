const logoutBtns = document.querySelectorAll('.logout-btn');

function logOut() {
  if (!logOut) {
    return;
  }
  logoutBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const savedLang = localStorage.getItem('language') || 'en';
      localStorage.clear();
      localStorage.setItem('language', savedLang);
      window.location.href = '/index.html';
    });
  });
}

export {logOut};
