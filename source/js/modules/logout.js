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
      const currentUrl = window.location.href;
      if (currentUrl.includes('admin')) {
        window.location.href = '/admin-login.html';
      } else {
        window.location.href = '/index.html';
      }
    });
  });
}

export {logOut};
