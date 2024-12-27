/* eslint-disable no-console */
const upload = document.querySelectorAll('.upload');

function handleFileUpload(event) {
  const maxFiles = 3;
  const files = event.target.files;

  // проверка изображение ли
  for (let i = 0; i < files.length; i++) {
    if (!files[i].type.startsWith('image/')) {
      event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').classList.add('is-active');
      event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').textContent = 'Images only are allowed to upload';
      event.target.value = '';
      return;
    }
  }

  // проверка количества файлов
  if (files.length > maxFiles) {
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').classList.add('is-active');
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').textContent = 'You can upload no more than 3 files.';
    event.target.value = '';
  } else {
    console.log('Файлы успешно выбраны:', files);
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').classList.remove('is-active');
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').textContent = '';
  }
}

function handleFileSizeUpload(event) {
  const files = event.target.files;
  const maxSize = 15 * 1024 * 1024;
  let totalSize = 0;

  // Проверка общего размера файлов
  for (let i = 0; i < files.length; i++) {
    totalSize += files[i].size;
  }

  if (totalSize > maxSize) {
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').classList.add('is-active');
    event.target.closest('.doc-questionary__wrapper').querySelector('.error-message').textContent = `Общий размер файлов не должен превышать ${maxSize / (1024 * 1024)} Мб.`;
    event.target.value = '';
  }
}

function showUploadedFiles() {
  if (!upload) {
    return;
  }

  upload.forEach((el) => {
    const input = el.querySelector('input[type="file"]');
    const fileList = el.querySelector('.file-list');
    const resetBtn = el.querySelector('.reset-upload');
    input.addEventListener('change', (e) => {

      if (el.classList.contains('upload--photos')) {
        handleFileUpload(e);
      }

      handleFileSizeUpload(e);

      fileList.innerHTML = '';

      const files = e.target.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = files[i].name;
          fileList.appendChild(listItem);
          resetBtn.classList.add('is-active');
        }
      } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Нет файлов';
        fileList.appendChild(listItem);
        resetBtn.classList.remove('is-active');
      }
    });
    resetBtn.addEventListener('click', () => {
      input.value = '';
      fileList.innerHTML = '';
      resetBtn.classList.remove('is-active');
    });
  });
}

export {showUploadedFiles};
