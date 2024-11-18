const items = document.querySelectorAll('.admin-table__item');

function showClientProfile() {
  if (!items) {
    return;
  }

  const mainContent = document.querySelector('.admin-content__main');
  const bottomBtns = document.querySelector('.admin-profile__buttons');
  const profile = document.querySelector('.admin__profile');
  const docSessions = document.querySelector('.admin-profile__sessions');
  const docPersonal = document.querySelector('.admin-profile__personal');
  const docInfo = document.querySelector('.admin-profile__doc-info');
  const backToProfileBtns = document.querySelectorAll('.admin-profile__back-to-profile');


  if (document.querySelector('.admin-profile__back-btn')) {
    document.querySelector('.admin-profile__back-btn').addEventListener('click', () => {
      mainContent.classList.remove('is-hidden');
      profile.classList.add('is-hidden');
    });
  }

  if (document.querySelector('.all-sessions-button')) {
    document.querySelector('.all-sessions-button').addEventListener('click', () => {
      mainContent.classList.add('sessions-shown');
      bottomBtns.classList.add('sessions-shown');
      docSessions.classList.remove('is-hidden');
      docPersonal.classList.add('is-hidden');
      docInfo.classList.add('is-hidden');
    });
  }

  backToProfileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      mainContent.classList.remove('sessions-shown');
      bottomBtns.classList.remove('sessions-shown');
      docSessions.classList.add('is-hidden');
      docPersonal.classList.remove('is-hidden');
      docInfo.classList.remove('is-hidden');
    });
  });
}

export {showClientProfile};
