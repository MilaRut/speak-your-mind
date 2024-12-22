/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable object-curly-spacing */
const indicator = document.querySelector('.requests-indicator');
const session_token = localStorage.getItem('token');
const requestsList = document.querySelector('.sessions__requests-list');
let totalRequests = 0;

function setIndicator() {
  if (!indicator) {
    return;
  }
  getSessionsFromBackend();

  if (requestsList) {
    requestsList.addEventListener('click', () => {
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.matches('.doctor__submit-btn') || e.target.matches('.doctor__submit-btn-new') || e.target.matches('.approve-session-btn') || e.target.matches('.cancel-session-btn')) {
      setTimeout(() => {
        setIndicator();
      }, 1000);
    }
  });
}

// получение списка сессий с бэкенда
function getSessionsFromBackend() {
  fetch('https://www.speakyourmind.help:8000/recieve_sessions_list_for_therapist', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ session_token }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Сеть не в порядке');
      }
      return response.json();
    })
    .then((data) => {
      const pending = data.pending_sessions_list;
      const pendingFiltered = pending.filter((item) => item.pending !== 2).length;
      const normal = data.normal_sessions_list.filter((item) => item.accepted === 0).length;
      totalRequests = normal + pendingFiltered;
      if (totalRequests > 0) {
        indicator.textContent = `(${totalRequests})`;
      } else {
        indicator.textContent = '';
      }
    })
    .catch((error) => {
      console.error('Ошибка при получении данных пользователя:', error);
    });
}

export {setIndicator};
