/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const addNewCardForm = document.querySelector('#add-card-form');
const token = localStorage.getItem('token');
let lastNums;

function formatCardInputs() {

  if (!addNewCardForm) {
    return;
  }
  const cardNumberInput = addNewCardForm.querySelector('#card-number');
  const cardExpInput = addNewCardForm.querySelector('#card-exp');
  const cardCVCInput = addNewCardForm.querySelector('#card-cvc');


  // форматирование номера карты
  cardNumberInput.addEventListener('input', () => {
    let cardNumber = cardNumberInput.value.replace(/\D/g, '');
    if (cardNumber.length > 16) {
      cardNumber = cardNumber.slice(0, 16);
    }
    cardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
    cardNumberInput.value = cardNumber;
  });

  // форматирование срока действия карты
  cardExpInput.addEventListener('input', () => {
    let expiryDate = cardExpInput.value.replace(/\D/g, '');
    if (expiryDate.length > 4) {
      expiryDate = expiryDate.slice(0, 4);
    }
    if (expiryDate.length >= 3) {
      expiryDate = expiryDate.slice(0, 2) + ' / ' + expiryDate.slice(2);
    }
    cardExpInput.value = expiryDate;
  });
  // ограничение длины cvc
  cardCVCInput.addEventListener('input', () => {
    cardCVCInput.value = cardCVCInput.value.replace(/\D/g, '');
    if (cardCVCInput.value.length > 3) {
      cardCVCInput.value = cardCVCInput.value.slice(0, 3);
    }
  });
}

function sendCard() {
  if (!addNewCardForm) {
    return;
  }

  const submitButton = addNewCardForm.querySelector('.card__submit-btn');
  submitButton.addEventListener('click', () => {
    submitButton.classList.add('is-loading');
  });

  addNewCardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expiryDate = addNewCardForm.querySelector('#card-exp').value;
    const month = expiryDate.slice(0, 2);
    const year = `${expiryDate.slice(5, 7)}`;
    lastNums = addNewCardForm.querySelector('#card-number').value.replace(/\s/g, '').slice(-4);


    const dataToSend = {
      session_token: token,
      card_number: Number(addNewCardForm.querySelector('#card-number').value.replace(/\s/g, '')),
      card_holder: addNewCardForm.querySelector('#card-owner').value,
      card_cvc: Number(addNewCardForm.querySelector('#card-cvc').value),
      card_valid_to: `${month}-${year}`,
    };

    setTimeout(() => {
      submitButton.classList.remove('is-loading');
    }, 1000);

    fetch('https://www.speakyourmind.help:8000/add_card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          submitButton.classList.remove('is-loading');
          throw new Error('Сеть не в порядке');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        addNewCardForm.reset();
        if (document.querySelector('#card-num')) {
          document.querySelector('#card-num').textContent = lastNums;
        }
        if (document.querySelector('.doctor-account__settings')) {
          document.querySelector('.doctor-account__settings').setAttribute('data-utils', 'settings-main');
        }
      })
      .catch((error) => {
        submitButton.classList.remove('is-loading');
        console.error('Ошибка при отправке данных карты:', error);
        alert(error);
      })
      .finally(() => {
        setTimeout(() => {
          submitButton.classList.remove('is-loading');
          if (submitButton.closest('.modal')) {
            submitButton.closest('.modal').classList.remove('is-active');
          }
          if (window.location.pathname === '/user-signup-payment.html') {
            window.location.href = '/user-account-settings.html';
          }
        }, 1000);
      });
  });
}

export {formatCardInputs, sendCard};
