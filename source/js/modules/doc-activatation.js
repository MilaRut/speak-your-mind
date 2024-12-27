/* eslint-disable no-console */
/* eslint-disable camelcase */
const admin = document.querySelector('.admin');
const token = localStorage.getItem('token');

function initDocActivation() {
  if (!admin) {
    return;
  }

  document.addEventListener('click', (e) => {
    if (e.target.matches('.doc-deactivate-btn')) {
      const docId = e.target.getAttribute('data-id');
      deactivateTherapist(docId);
      window.location.reload();
    } else if (e.target.matches('.doc-activate-btn')) {
      const docId = e.target.getAttribute('data-id');
      activateTherapist(docId);
      window.location.reload();
    }
  });
}

function activateTherapist(docId) {
  const dataToSend = {
    session_token: token,
    doc_id: docId,
    deactivate: 0,
  };

  if (token) {
    fetch('https://www.speakyourmind.help:8000/approve_therapist', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сеть не в порядке');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Доктор заапрувлен', data);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя:', error);
        });
  } else {
    console.log('Токен не найден. Пожалуйста, войдите в систему.');
  }
}

function deactivateTherapist(docId) {
  const dataToSend = {
    session_token: token,
    doc_id: docId,
    deactivate: 1,
  };

  if (token) {
    fetch('https://www.speakyourmind.help:8000/approve_therapist', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сеть не в порядке');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Доктор деактивирован', data);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя:', error);
        });
  } else {
    console.log('Токен не найден. Пожалуйста, войдите в систему.');
  }
}

export {initDocActivation};
