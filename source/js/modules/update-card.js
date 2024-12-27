/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const updateCardForm = document.querySelector('#update-card-form');
const token = localStorage.getItem('token');
let lastNums;

function formatCardInputsUpdate() {

  if (!updateCardForm) {
    return;
  }
  const cardNumberInput = updateCardForm.querySelector('#update-card-number');
  const cardExpInput = updateCardForm.querySelector('#update-card-exp');
  const cardCVCInput = updateCardForm.querySelector('#update-card-cvc');


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

function sendCardUpdate() {
  if (!updateCardForm) {
    return;
  }

  const submitButton = updateCardForm.querySelector('.card__submit-btn');
  submitButton.addEventListener('click', () => {
    submitButton.classList.add('is-loading');
  });

  updateCardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expiryDate = updateCardForm.querySelector('#update-card-exp').value;
    const month = expiryDate.slice(0, 2);
    const year = `${expiryDate.slice(5, 7)}`;
    lastNums = updateCardForm.querySelector('#update-card-number').value.replace(/\s/g, '').slice(-4);

    const dataToSend = {
      session_token: token,
      card_number: Number(updateCardForm.querySelector('#update-card-number').value.replace(/\s/g, '')),
      card_holder: updateCardForm.querySelector('#update-card-owner').value,
      card_cvc: Number(updateCardForm.querySelector('#update-card-cvc').value),
      card_valid_to: `${month}-${year}`,
    };

    setTimeout(() => {
      submitButton.classList.remove('is-loading');
    }, 1000);

    fetch('http://127.0.0.1:8000/update_card', {
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
        updateCardForm.reset();
        if (document.querySelector('#card-num')) {
          document.querySelector('#card-num').textContent = lastNums;
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
          submitButton.closest('.modal').classList.remove('is-active');
        }, 1000);
      });
  });
}

export {formatCardInputsUpdate, sendCardUpdate};
