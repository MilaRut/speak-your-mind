const switcherEn = document.querySelector('[data-lang="en"]');
const switcherRu = document.querySelector('[data-lang="ru"]');
// Функция для загрузки JSON-файла
function loadLanguage(lang) {
  if (switcherEn) {

    fetch(`./locales/${lang}.json`)
        .then((response) => response.json())
        .then((translations) => {
          translatePage(translations);
        })
        .catch((error) => console.error('Error loading language file:', error));
  }
}

// Функция для замены текста на странице
function translatePage(translations) {

  for (const key in translations) {
    if (Object.hasOwn(translations, key)) {
      const elements = document.querySelectorAll(`[data-translate="${key}"]`);
      elements.forEach((element) => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          // Обновление плейсхолдера для инпутов
          element.placeholder = translations[key];
        } else {
          // Обновление текста для других элементов
          element.textContent = translations[key];
        }
      });
    }
  }

  // Обработчики событий для кнопок выбора языка
  switcherEn.addEventListener('click', (e) => {
    e.preventDefault();
    loadLanguage('en');
    saveLanguage('en');
  });
  switcherRu.addEventListener('click', (e) => {
    e.preventDefault();
    loadLanguage('ru');
    saveLanguage('ru');
  });
}

// Сохранение выбранного языка
function saveLanguage(lang) {
  localStorage.setItem('language', lang);
}

export {loadLanguage};
