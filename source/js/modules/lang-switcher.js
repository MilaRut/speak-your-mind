const langSwitcherBtn = document.querySelector('.lang-switcher__btn > span');
const lang = document.documentElement.lang;

function setLangBtn() {
  switch (lang) {
    case 'ru':
      langSwitcherBtn.textContent = 'Русский';
      break;
    case 'en':
      langSwitcherBtn.textContent = 'English';
      break;
    case 'hu':
      langSwitcherBtn.textContent = 'Magyar';
      break;
    default:
      langSwitcherBtn.textContent = 'Русский';
  }
}


export {setLangBtn};
