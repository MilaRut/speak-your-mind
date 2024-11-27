const admin = document.querySelector('.admin .internal');
const sessionWarningKey = 'sessionWarningShown';

let sessionTimeout;
let warningTimeout;

function showAlert(id) {
  const el = document.getElementById(id);
  el.classList.add('is-active');
}

function hideAlert(id) {
  const el = document.getElementById(id);
  el.classList.remove('is-active');
}

function adminLogout() {
  const savedLang = localStorage.getItem('language') || 'en';
  localStorage.clear();
  localStorage.setItem('language', savedLang);
  localStorage.setItem(sessionWarningKey, 'false');
  window.location.href = '/admin-login.html';
}

function resetTimers() {
  hideAlert('logout-warning');
  clearTimeout(sessionTimeout);
  clearTimeout(warningTimeout);

  if (!localStorage.getItem(sessionWarningKey)) {
    showAlert('session-warning');
    localStorage.setItem(sessionWarningKey, 'true');
  }

  warningTimeout = setTimeout(() => {
    showAlert('logout-warning');
  }, 14 * 60 * 1000);

  sessionTimeout = setTimeout(() => {
    adminLogout();
  }, 15 * 60 * 1000);
}

function initAdminAlerts() {
  if (!admin) {
    return;
  }

  resetTimers(); // Инициализация таймеров при загрузке страницы

  // Сброс таймеров при активности
  document.addEventListener('mousemove', resetTimers);
  document.addEventListener('keypress', resetTimers);
}

export {initAdminAlerts};
