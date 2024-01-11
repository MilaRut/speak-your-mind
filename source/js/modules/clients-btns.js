const clients = document.querySelector('.clients');
const clientsItems = document.querySelectorAll('.clients__item');
const actionsBtns = document.querySelectorAll('.clients__actions-btn');

const status = {
  scheduled: 'Запланирована',
  notscheduled: 'Не записан',
  requested: 'Запрос на сессию',
  unapproved: 'Ожидание подтверждения',
};

const buttons = {
  scheduled: 'Перенести',
  notscheduled: 'Записать',
  requested: 'Подтвердить',
  unapproved: 'Перенести',
};

function setSessionStatus() {
  if (clients) {
    clientsItems.forEach((item) => {
      const currentItem = item;
      const currentStatus = currentItem.querySelector('.clients__session-status');
      const currentBtn = currentItem.querySelector('.clients__actions-btn');
      if (item.classList.contains('clients__item--scheduled')) {
        currentStatus.textContent = status.scheduled;
        currentBtn.textContent = buttons.scheduled;
        currentBtn.setAttribute('data-action', 'reschedule');
        currentBtn.setAttribute('data-open-modal', '');
        currentBtn.setAttribute('data-modal-id', '#doctor-reschedule');
      } else if (item.classList.contains('clients__item--not-scheduled')) {
        currentStatus.textContent = status.notscheduled;
        currentBtn.textContent = buttons.notscheduled;
        currentBtn.setAttribute('data-action', 'schedule');
      } else if (item.classList.contains('clients__item--requested')) {
        currentStatus.textContent = status.requested;
        currentBtn.textContent = buttons.requested;
        currentBtn.setAttribute('data-action', 'confirm');
      } else if (item.classList.contains('clients__item--unapproved')) {
        currentStatus.textContent = status.unapproved;
        currentBtn.textContent = buttons.unapproved;
        currentBtn.setAttribute('data-action', '');
      }
    });
  }
}

// TODO: переписать функцию, в данный момент она для демонстрации

function initActionsBtns() {
  if (clients) {
    actionsBtns.forEach((btn) => {
      const currentBtn = btn;
      const currentParent = currentBtn.closest('.clients__item');
      const className = 'clients__item';
      const currentAction = currentBtn.getAttribute('data-action');
      btn.addEventListener('click', function () {
        if (currentAction === 'confirm' || currentAction === 'schedule') {
          currentParent.className = className;
          currentParent.classList.add('clients__item--scheduled');
          currentBtn.removeAttribute('data-action', 'confirm');
          currentBtn.setAttribute('data-action', 'reschedule');
          currentParent.querySelector('.clients__session-status').textContent = status.scheduled;
          currentParent.querySelector('.clients__actions-btn').textContent = buttons.scheduled;
          currentBtn.setAttribute('data-open-modal', '');
          currentBtn.setAttribute('data-modal-id', '#doctor-reschedule');
        }
      });
    });
  }
}

export {setSessionStatus, initActionsBtns};
