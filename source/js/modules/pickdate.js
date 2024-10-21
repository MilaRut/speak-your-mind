const choiceDateForm = document.querySelector('#choice-date-form');

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
      submitBtn.disabled = false;
      submitBtn.classList.add('is-enabled');
      const currentDatetime = slot.closest('label').querySelector('span').textContent;
      const currentDay = slot.closest('.doctor__day-wrapper').querySelector('time').textContent;
      dateTime.textContent = ` ${currentDatetime} ${currentDay} `;

    });
  });

}

export {setChoiceBtn};
