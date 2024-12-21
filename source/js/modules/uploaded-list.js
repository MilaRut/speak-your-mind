const upload = document.querySelectorAll('.upload');

function handleFileUpload(event) {
  const maxFiles = 3;
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    if (!files[i].type.startsWith('image/')) {
      alert('Вы можете загружать только изображения.');
      event.target.value = '';
      return;
    }
  }

  if (files.length > maxFiles) {
    alert(`Вы можете загрузить не более ${maxFiles} файлов.`);
    event.target.value = '';
  } else {
    console.log('Файлы успешно выбраны:', files);
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
