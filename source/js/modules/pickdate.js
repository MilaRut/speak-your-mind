const choiceDateForm = document.querySelector('#choice-date-form');
const months = ['января', 'февраля', 'марта', 'aпреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

function setChoiceBtn() {
  if (!choiceDateForm) {
    return;
  }

  const slots = choiceDateForm.querySelectorAll('input[type="radio"]');
  const submitBtn = choiceDateForm.querySelector('button[type="submit"]');
  const dateTime = submitBtn.querySelector('.doctor__submit-date > time');
  const errorMsg = choiceDateForm.querySelector('.error-message');

  choiceDateForm.addEventListener('submit', function (e) {
    const checkedSlot = choiceDateForm.querySelectorAll('input[type="radio"]:checked');
    if (checkedSlot.length === 0) {
      e.preventDefault();
      errorMsg.classList.add('is-active');
    }
  });

  slots.forEach((slot) => {
    slot.addEventListener('change', function () {
      errorMsg.classList.remove('is-active');
      submitBtn.classList.add('is-enabled');
      const currentDatetime = slot.value;
      const day = currentDatetime.slice(8, 10);
      const month = currentDatetime.slice(5, 7);
      const time = currentDatetime.slice(11);

      const monthNum = month[0] === '0' ? Number(month[1]) : Number(month);
      const dayText = day[0] === '0' ? day[1] : day;
      const monthText = months[monthNum - 1];

      dateTime.setAttribute('datetime', currentDatetime);
      dateTime.textContent = `${dayText} ${monthText} ${time}`;

    });
  });

}

export {setChoiceBtn};
