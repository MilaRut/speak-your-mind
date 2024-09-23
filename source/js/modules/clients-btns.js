// Страница /doctor-account-clients.html, кнопки действий в графе "Статус сессии"

const clients = document.querySelector('.clients');

function closeAll(arr) {
  arr.forEach((el) => {
    if (el.classList.contains('is-active')) {
      el.classList.remove('is-active');
    }
  });
}

function initActionsBtns() {
  if (!clients) {
    return;
  }

  const actionsBtns = document.querySelectorAll('.clients__session-status');

  actionsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAll(document.querySelectorAll('.clients__actions'));
      const currentActions = btn.closest('.clients__item').querySelector('.clients__actions');
      if (!currentActions.classList.contains('is-active')) {
        currentActions.classList.add('is-active');
      }
    });
  });

  const clientsCloseBtns = document.querySelectorAll('.clients__actions-close');
  clientsCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.closest('.clients__actions').classList.remove('is-active');
    });
  });

  document.addEventListener('click', () => {
    closeAll(document.querySelectorAll('.clients__actions'));
  });
}

export {initActionsBtns};
