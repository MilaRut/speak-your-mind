const utilsBtnsMain = document.querySelectorAll('[utils-btn-main]');
const utilsBtnsSettings = document.querySelectorAll('[utils-btn-settings]');
const uaccMain = document.querySelector('.user-account__main');
const uaccSettings = document.querySelector('.user-account__settings');
const daccSettings = document.querySelector('.doctor-account__settings');


function setUtilsBtns() {
  if (utilsBtnsMain && uaccMain) {
    utilsBtnsMain.forEach((btn) => {
      btn.addEventListener('click', function () {
        let currentBtn = btn;
        let btnId = currentBtn.getAttribute('data-id');
        uaccMain.setAttribute('data-utils', btnId);
      });
    });
  }
  if (utilsBtnsSettings && uaccSettings) {
    utilsBtnsSettings.forEach((btn) => {
      btn.addEventListener('click', function () {
        let currentBtn = btn;
        let btnId = currentBtn.getAttribute('data-id');
        uaccSettings.setAttribute('data-utils', btnId);
      });
    });
  }
  if (utilsBtnsSettings && daccSettings) {
    utilsBtnsSettings.forEach((btn) => {
      btn.addEventListener('click', function () {
        let currentBtn = btn;
        let btnId = currentBtn.getAttribute('data-id');
        daccSettings.setAttribute('data-utils', btnId);
      });
    });
  }
}

export {setUtilsBtns};
