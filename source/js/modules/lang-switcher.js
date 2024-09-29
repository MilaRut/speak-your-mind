const currentLanguage = document.querySelectorAll('.current-language');
const lang = localStorage.getItem('language');

function setLangBtn() {
  currentLanguage.forEach((el) => {
    switch (lang) {
      case 'ru':
        el.textContent = 'Русский';
        break;
      case 'en':
        el.textContent = 'English';
        break;
      case 'hu':
        el.textContent = 'Magyar';
        break;
      default:
        el.textContent = 'English';
    }
  });
}


export {setLangBtn};
