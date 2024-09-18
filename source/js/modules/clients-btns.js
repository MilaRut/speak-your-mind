// Страница /doctor-account-clients.html, кнопки действий в графе "Статус сессии"

const clients = document.querySelector('.clients');

function initActionsBtns() {
  if (!clients) {
    return;
  }

  const actionsBtns = document.querySelectorAll('.clients__session-status');

  actionsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentActions = btn.closest('.clients__item').querySelector('.clients__actions');
      if (!currentActions.classList.contains('is-active')) {
        currentActions.classList.add('is-active');
      }
    });
  });

  const clientsCloseBtns = document.querySelectorAll('.clients__actions-close');
  clientsCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.clients__actions').classList.remove('is-active');
    });
  });
}

export {initActionsBtns};
