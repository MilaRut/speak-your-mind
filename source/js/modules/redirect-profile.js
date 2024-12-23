/* eslint-disable object-shorthand */
/* eslint-disable object-curly-spacing */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const userBtn = document.querySelector('.logged__btn');
const isTherapist = localStorage.getItem('is_therapist') === 'true';
const session_token = localStorage.getItem('token');

function redirectToProfile() {
  if (!userBtn) {
    return;
  }

  userBtn.addEventListener('click', () => {
    if (isTherapist) {
      window.location.href = '/doctor-account-sessions.html';
    } else {
      getUserDataFromBackend();
    }
  });
}

function getUserDataFromBackend() {
  if (session_token) {
    fetch('https://www.speakyourmind.help:8000/get_client_data', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_token: session_token}),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сеть не в порядке');
          }
          return response.json();
        })
        .then((data) => {
          if (data.user_age === null) {
            window.location.href = '/user-signup-main.html';
          } else if (data.has_therapist === null) {
            window.location.href = '/user-signup-choice.html';
          } else if (data.user_card_data === '') {
            window.location.href = '/user-signup-payment.html';
          } else {
            window.location.href = '/user-account-main.html';
          }
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя:', error);
        });
  } else {
    console.log('Токен не найден. Пожалуйста, войдите в систему.');
  }
}

export {redirectToProfile};
