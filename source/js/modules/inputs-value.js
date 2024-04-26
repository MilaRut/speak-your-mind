const timeValues = document.querySelectorAll('.time-value');

function setTimeValue() {
  if (!timeValues) {
    return;
  }

  timeValues.forEach((el) => {
    const currentWrapper = el.closest('.doctor__day-wrapper');
    const currentDay = currentWrapper.querySelector('.doctor__day');
    const currentDate = currentDay.querySelector('time');
    const currentLabel = el.closest('label');
    const currentInput = currentLabel.querySelector('input');
    currentInput.value = currentDate.getAttribute('datetime') + 'T' + el.textContent;
  });
}

export {setTimeValue};
