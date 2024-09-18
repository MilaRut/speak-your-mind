const showMoreBtn = document.querySelectorAll('.schedule__show-more');
const scheduleDropdown = document.querySelectorAll('.schedule-container');

function initScheduleDropdown() {
  if (!scheduleDropdown) {
    return;
  }

  scheduleDropdown.forEach((list) => {
    const items = list.querySelectorAll('.doctor__day-wrapper');

    if (items.length === 0) {
      setTimeout(() => {
        initScheduleDropdown();
      }, 200);
    }

    items.forEach((item) => {
      item.style.display = 'none';
    });
    if (items.length <= 3) {
      items.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      for (let i = 0; i < 3; i++) {
        items[i].style.display = 'block';
      }
    }
  });
}

function expandList() {
  if (!showMoreBtn) {
    return;
  }

  showMoreBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentId = btn.getAttribute('data-id');
      const currentList = document.querySelector(currentId);

      const items = currentList.querySelectorAll('.doctor__day-wrapper');

      if (items.length === 0) {
        setTimeout(() => {
          expandList();
        }, 200);
        return;
      }

      let shownCount = 0;

      items.forEach((item) => {
        if (item.style.display === 'block') {
          shownCount++;
        }
      });

      // Показываем следующие 3 элемента
      for (let i = shownCount; i < shownCount + 3 && i < items.length; i++) {
        items[i].style.display = 'block';
      }

      // Если все элементы показаны, скрываем кнопку
      if (shownCount + 3 >= items.length) {
        btn.classList.add('hidden');
      }
    });
  });
}

export {initScheduleDropdown, expandList};
