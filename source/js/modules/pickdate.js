const choiceDateForm = document.querySelectorAll('.choice-date-form');
const isTherapistPage = document.querySelector('.therapist');

// Функция для форматирования даты
function renderDate(data) {
  const schTime = data;
  const date = new Date(schTime);
  const language = localStorage.getItem('language') || 'en';
  let optionsDate;

  if (language === 'en') {
    optionsDate = {
      day: 'numeric',
      month: 'long',
    };
  } else {
    optionsDate = {
      day: 'numeric',
      month: 'long',
    };
  }

  const formattedDate = date.toLocaleString(language === 'en' ? 'en-US' : 'ru-RU', optionsDate);
  const finalDate = `${formattedDate}`;
  return finalDate;
}

function setChoiceBtn() {
  if (!choiceDateForm) {
    return;
  }

  choiceDateForm.forEach((form) => {
    const slots = form.querySelectorAll('input[type="radio"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const dateTime = submitBtn.querySelector('.doctor__submit-date');
    const errorMsg = form.querySelector('.error-message');

    if (!slots.length) {
      setTimeout(() => {
        setChoiceBtn();
      }, 200);
      return;
    }

    slots.forEach((slot) => {
      if (!slot.getAttribute('data-id') || slot.getAttribute('data-id') === '') {
        setTimeout(() => {
          setChoiceBtn();
        }, 200);
        return;
      }

      slot.addEventListener('change', function () {
        errorMsg.classList.remove('is-active');
        submitBtn.disabled = false;
        submitBtn.classList.add('is-enabled');
        submitBtn.setAttribute('data-id', slot.getAttribute('data-id'));
        const currentDay = slot.getAttribute('data-time');
        const currentDatetime = slot.getAttribute('value');
        dateTime.textContent = ` ${renderDate(currentDay)} ${currentDatetime} `;
      });
    });
  });
}

export {setChoiceBtn};
