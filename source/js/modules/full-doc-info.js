/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
const fullInfoBtn = document.querySelector('.full-info-btn');
const session_token = localStorage.getItem('token');
const url = new URL(window.location.href);
const user_id = Number(url.searchParams.get('id'));

// функция для форматирования даты
function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const language = localStorage.getItem('language') || 'en';

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = dateObj.toLocaleDateString(language === 'en' ? 'en-US' : 'ru-RU', options);
  return formattedDate;
}

function transformData(data) {
  // Объект для преобразования значений
  const citizenshipMap = {
    '0': 'РФ',
    '1': 'Венгрия',
    '2': 'Казахстан',
    '3': 'Украина',
    '4': 'Беларусь',
    'other': 'Другое',
  };

  const sessionCostMap = {
    '0': '19500',
    '1': '29500',
    '2': '39500',
  };

  const languagesMap = {
    '0': 'Русский',
    '1': 'Английский',
    '2': 'Венгерский',
  };

  const contactMap = {
    'doc_contact_email': 'Email',
    'doc_contact_whatsapp': 'WhatsApp',
    'other': 'Telegram',
  };

  const refMap = {
    '0': 'Рассказали коллеги / друзья',
    '1': 'Из рекламы во ВКонтакте',
    '2': 'Из рекламы в Фейсбук',
    '3': 'Из рекламы в Инстаграм',
    '4': 'Из вашего аккаунта в Инстаграм',
    '5': 'Нашёл/нашла на сайте информацию о наборе',
    '6': 'Через поиск работы в интернете',
    'other': 'Другое',
  };

  const therapyTypeMap = {
    '0': 'Индивидуальная',
    '1': 'Парная',
    '2': 'Индивидуальная и парная',
  };

  const sympomsMap = {
    '0': 'Усталость',
    '1': 'Депрессивные состояния',
    '2': 'Раздражительность',
    '3': 'Тревожность',
    '4': 'Панические атаки',
    '5': 'Самооценка',
    '6': 'Одиночество',
    '7': 'Поведенческая зависимость',
    '8': 'Химические зависимости',
    '9': 'Критические состояния',
    '10': 'ЛГБТ+',
    '11': 'С партнером',
    '12': 'С родителями',
    '13': 'Сексуальные',
    '14': 'В целом, с окружающими',
    '15': 'С детьми',
    '16': 'Сложности с ориентацией, ее поиск',
    '17': 'Недостаток мотивации',
    '18': 'Не знаю, чем хочу заниматься',
    '19': 'Отсутствие цели',
    '20': 'Выгорание',
    '21': 'Прокрастинация',
    '22': 'Смена, потеря работы',
    '23': 'Переезд, эмиграция',
    '24': 'Разрыв отношений, развод',
    '25': 'Утрата близкого человека',
    '26': 'Беременность, рождение ребенка',
    '27': 'Финансовые изменения',
    '28': 'Болезнь, своя или близких',
  };

  const methodsMap = {
    '0': 'Психоанализ',
    '1': 'Терапия внутренних семейных систем (IFS)',
    '2': 'Когнитивно-поведенческая терапия (КПТ)',
    '3': 'Травма-фокусированный КПТ',
    '4': 'Терапия, сфокусированная на сострадании (CFT)',
    '5': 'Диалектическая поведенческая терапия (ДБТ/DBT)',
    '6': 'Гештальт-терапия',
    '7': 'Системная семейная терапия',
    '8': 'Системная сексуальная терапия',
    '9': 'Терапия принятия и ответственности',
    '10': 'Схема-терапия (CBT)',
    '11': 'Экзистенциальная психотерапия(лого и клиент-центрированная)',
    '12': 'Трансактный анализ',
    '13': 'Десенсибилизация и переработка движением глаз(EMDR/ДПДГ)',
    '14': 'Рационально эмоционально поведенческая терапия(REBT)',
    '15': 'Эмоционально-фокусированная терапия (ЭФТ)',
    '16': 'Арт-терапия',
  };

  const addEduMap = {
    '0': 'Зависимости, аддикции',
    '1': 'Растройство пищевого поведения',
    '2': 'Сексология',
    '3': 'Экстремальные ситуации, ПТСР',
    '4': 'Другое',
  };

  const transformedData = {
    'Статус профиля': data.approved === 0 ? 'Не активирован' : 'Активирован',
    'Имя': data.doc_name,
    'Дата рождения': formatDate(data.doc_date_of_birth),
    'Пол': data.doc_gender === 0 ? 'Мужской' : 'Женский',
    'Образование': data.doc_educations,
    'Дополнительное образование': data.doc_additional_educations === null ? 'Нет' : data.doc_additional_educations.map((addEduIndex) => addEduMap[addEduIndex]).join(', '),
    'Состоите ли вы в каком-либо психотерапевтическом сообществе?': data.doc_comunity,
    'Начало практики': data.doc_practice_start,
    'Сколько лет опыта работы онлайн': data.doc_online_experience,
    'Гражданство': citizenshipMap[data.doc_citizenship],
    'Гражданство (если выбрано "другое")': data.doc_citizenship_other,
    'Email': data.doc_email,
    'Телефон': data.doc_phone,
    'О себе': data.doc_additional_info,
    'Какие вещи вы считаете недопустимыми': data.doc_question_1,
    'С чем нельзя работать онлайн': data.doc_question_2,
    'Сколько клиентов сейчас в практике': data.doc_customers_amount_current,
    'Сколько времени заняла самая длительная терапия': data.doc_therapy_length,
    'Личная терапия': data.doc_personal_therapy === 'yes' ? 'Да' : 'Нет',
    'Супервизия': data.doc_supervision === 'yes' ? 'Да' : 'Нет',
    'Есть ли другая работа кроме психотерапевтической практики': data.doc_another_job,
    'Какое количество клиентов готовы взять': data.doc_customers_slots_available,
    'Ссылки на соцсети': data.doc_socials_links,
    'Стоимость сессии': sessionCostMap[data.doc_session_cost],
    'Способ связи': contactMap[data.doc_contact],
    'Ник в телеграм (если выбран)': data.doc_contact_other,
    'Часовой пояс': data.doc_timezone,
    'Как узнали о наборе терапевтов': refMap[data.doc_ref],
    'Как узнали о наборе терапевтов (если выбрано "Другое")': data.doc_ref_other,
    'Возраст клиентов': data.doc_client_age === 0 ? '16+' : '18+',
    'Опыт работы с LGBTQ+': data.doc_lgbtq === 0 ? 'Да' : 'Нет',
    'Вид терапии': therapyTypeMap[data.doc_therapy_type],
    'Языки терапии': data.doc_languages.map((langIndex) => languagesMap[langIndex]).join(', '),
    'Симптомы, с которыми работает': data.doc_sympoms.map((symptIndex) => sympomsMap[symptIndex]).join(', '),
    'Методы терапии': data.doc_methods.map((methIndex) => methodsMap[methIndex]).join(', '),
  };

  return transformedData;
}

function downloadFullInfo() {
  if (!fullInfoBtn) {
    return;
  }

  fullInfoBtn.addEventListener('click', () => {
    const dataToSend = {
      session_token: session_token,
      user_id: user_id,
    };

    fetch('https://www.speakyourmind.help:8000/admin_get_therapist_interview', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сеть не в порядке');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);

          const transformedData = transformData(data);
          const jsonString = JSON.stringify(transformedData, null, 2);
          const blob = new Blob([jsonString], {type: 'application/json'});
          const downloadUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = 'document.txt';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(downloadUrl);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя:', error);
        });
  });
}

export {downloadFullInfo};


