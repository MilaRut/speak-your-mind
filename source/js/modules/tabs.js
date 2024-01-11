const tabs = document.querySelectorAll('.tabs');
const tabsBtn = document.querySelectorAll('[tab-btn]');
const tabsItems = document.querySelectorAll('[tab-item]');

function initTabs() {
  if (tabs) {
    tabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('is-active')) {
          tabsBtn.forEach((tabBtn) => {
            tabBtn.classList.remove('is-active');
          });
          tabsItems.forEach((tabItem) => {
            tabItem.classList.remove('is-active');
          });
          currentBtn.classList.add('is-active');
          currentTab.classList.add('is-active');
        }
      });
    });
  }
}

export {initTabs};
