const schedule = document.querySelector('.schedule');

function renderSchedule() {
  if (!schedule) {
    return;
  }

  const timeOptions = document.querySelectorAll('.schedule__calender-timeoption');
  const daySlots = document.querySelectorAll('.schedule__calender-day-slots');

  daySlots.forEach((el) => {
    const day = el.closest('.schedule__calender-day').getAttribute('data-time');

    for (let i = 0; i < timeOptions.length; i++) {
      const slot = document.createElement('div');
      el.append(slot);
      slot.outerHTML = `<label>
    <input type="checkbox" id="" value="${day}T${timeOptions[i].textContent}" name="schedule">
  </label>`;
    }

    const inputs = document.querySelectorAll('input[name="schedule"]');
    inputs.forEach((input) => {
      input.addEventListener('change', function () {
        setHours(input);
      });
    });
  });
}

function setHours(el) {

  if (!schedule) {
    return;
  }
  const currentWeek = el.closest('.schedule__calender-week');
  const currentWeekId = currentWeek.getAttribute('id');
  const currentChecked = currentWeek.querySelectorAll('input[name="schedule"]:checked');
  let currentBtn = document.querySelector(`[data-tab="#${currentWeekId}"]`);
  const num = currentBtn.querySelector('.hours-sum');
  num.textContent = `${currentChecked.length} ч.`;
}

function markScheduleSlots() {

  if (!schedule) {
    return;
  }

  // имитация передачи в инпут для запланированной сессии класса для статуса
  const test1 = document.querySelector('input[value="2024-04-29T07:00"]');
  const test2 = document.querySelector('input[value="2024-05-02T13:00"]');
  test1.classList.add('requested');
  test2.classList.add('scheduled');

  // конец

  const scheduled = document.querySelectorAll('.scheduled');

  function createTooltip(el) {
    const tooltip = document.createElement('div');
    tooltip.classList = 'tooltip';
    tooltip.textContent = 'Ксения';
    el.closest('label').append(tooltip);
  }

  scheduled.forEach((el) => {
    el.disabled = 'true';
    createTooltip(el);
  });
}

// временная функция для демонстрации сохранения расписания
function saveState() {

  if (!schedule) {
    return;
  }
  const inputs = document.querySelectorAll('input[name="schedule"]');

  inputs.forEach((el) => {
    el.onchange = () => localStorage.setItem(el.value, el.checked);
    el.checked = localStorage.getItem(el.value) === 'true';
    setHours(el);
  });
}

export {renderSchedule, markScheduleSlots, saveState};
