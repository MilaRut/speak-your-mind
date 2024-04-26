const schedule = document.querySelector('.schedule');

const date = new Date();
// Дата
const weekDay = date.getDay();
// День недели
const monthDay = date.getDate();
// День месяца
const month = date.getMonth();
// Номер месяца (индекс)
let result = [];

function getWeek() {
  const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Кол-во дней в каждом месяце
  const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
  // День месяца, понедельника текущей недели
  let countMonthDay;
  // Проверка что бы всегда начинать выстаривать текущую неделю с понедельника
  if (weekDay > 1) {
    countMonthDay = monthDay - (weekDay - 1);
  } else if (weekDay === 0) {
    countMonthDay = monthDay - 6;
  } else {
    countMonthDay = monthDay;
  }
  // Постраение итогового массива
  for (let i = 0; i < week.length; i++) {
    // Если countMonthDay больше кол-ва дней в месяце
    // дни начинаются сначала
    if ((countMonthDay + i) > countDayOnMonth[month]) {
      let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1));

      let objEl = {};
      objEl.full = date + [i];
      objEl.day = week[i];
      objEl.date = count + i;
      result.push(objEl);

      // result.push([`day: ${week[i]}`, `date: ${count + i}`]);

    } else {

      let objEl = {};
      objEl.full = date + [i];
      objEl.day = week[i];
      objEl.date = countMonthDay + i;
      result.push(objEl);

      // result.push([`day: ${week[i]}`, `date: ${countMonthDay + i}`]);
    }
  }

  return result;
}

function renderSchedule() {
  if (!schedule) {
    return;
  }

  getWeek();

  const calender = document.querySelector('.schedule__calender');
  const slots = 15;

  for (let i = 0; i < 7; i++) {

    // создаем день
    const dayItem = document.createElement('div');
    dayItem.classList = 'schedule__calender-day';
    calender.append(dayItem);

    // создаем заголовок дня
    const dayTitle = document.createElement('div');
    dayTitle.classList = 'schedule__calender-day-title';
    dayItem.append(dayTitle);

    // создаем строки для дня и даты и передаем в них значения

    const dayweek = document.createElement('span');
    dayTitle.append(dayweek);
    dayweek.classList = 'dayweek';
    dayweek.textContent = `${result[i].day}, `;

    const daydate = document.createElement('span');
    dayTitle.append(daydate);
    daydate.classList = 'daydate';
    daydate.textContent = result[i].date;

    // создаем контейнер для слотов
    const daySlots = document.createElement('div');
    dayItem.append(daySlots);
    daySlots.classList = 'schedule__calender-day-slots';

    for (let j = 0; j < slots; j++) {
      const slot = document.createElement('div');
      daySlots.append(slot);
      slot.outerHTML = `<label>
    <input type="checkbox" id="" data-time="" name="schedule">
  </label>`;
    }
  }
}

function changeWeek() {
  const btns = document.querySelectorAll('.schedule__subtab-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const dataValue = btn.getAttribute('data-tab');
      weekDay = weekDay + dataValue;
      renderSchedule();
    });
  });
}

// export {renderSchedule, changeWeek};
