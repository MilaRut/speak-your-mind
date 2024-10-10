const addEduBtn = document.querySelector('.doc-questionary__add-edu-btn');
const placeholders = {
  ru: {
    year: 'Год',
    university: 'ВУЗ',
    faculty: 'Факультет',
    degree: 'Степень',
  },
  en: {
    year: 'Year',
    university: 'University',
    faculty: 'Faculty',
    degree: 'Degree',
  },
};

function getCurrentLanguage() {
  const lang = localStorage.getItem('language');
  return lang === 'ru' || lang === 'en' ? lang : 'en';
}

function setPlaceholders(selector) {
  const lang = getCurrentLanguage();
  selector.querySelector('input[name="edu_year"]').placeholder = placeholders[lang].year;
  selector.querySelector('input[name="edu_university"]').placeholder = placeholders[lang].university;
  selector.querySelector('input[name="edu_faculty"]').placeholder = placeholders[lang].faculty;
  selector.querySelector('input[name="edu_degree"]').placeholder = placeholders[lang].degree;
}

function addEduInputs() {
  addEduBtn.addEventListener('click', () => {
    const parentBlock = document.querySelector('.doc-questionary__inputs-wrapper');
    const newInputs = document.createElement('div');
    newInputs.innerHTML = `
                <br>
                <div>
                  <fieldset>
                    <input type='number' name='edu_year' placeholder='' data-translate='doc_q_edu_year'>
                    <input type='text' name='edu_university' placeholder='' data-translate='doc_q_edu_university'>
                  </fieldset>
                  <fieldset>
                    <input type='text' name='edu_faculty' placeholder='' data-translate='doc_q_edu_faculty'>
                    <input type='text' name='edu_degree' placeholder='' data-translate='doc_q_edu_degree'>
                  </fieldset>
                  <button type="button" class="edu__delete-btn">Удалить</button>
                </div>
    `;
    console.log(newInputs);
    setPlaceholders(newInputs);
    parentBlock.append(newInputs);
  });
}

export {addEduInputs};
