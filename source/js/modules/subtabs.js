const subtabs = document.querySelectorAll('.subtabs');
const subtabsBtn = document.querySelectorAll('[subtab-btn]');
const subtabsItems = document.querySelectorAll('[subtab-item]');

function initSubtabs() {
  if (subtabs) {
    subtabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('is-active')) {
          subtabsBtn.forEach((el) => {
            el.classList.remove('is-active');
          });
          subtabsItems.forEach((el) => {
            el.classList.remove('is-active');
          });
          currentBtn.classList.add('is-active');
          currentTab.classList.add('is-active');
        }
      });
    });
  }
}

export {initSubtabs};
