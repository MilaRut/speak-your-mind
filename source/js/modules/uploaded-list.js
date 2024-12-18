const upload = document.querySelectorAll('.upload');

function showUploadedFiles() {
  if (!upload) {
    return;
  }

  upload.forEach((el) => {
    const input = el.querySelector('input[type="file"]');
    const fileList = el.querySelector('.file-list');
    input.addEventListener('change', (e) => {
      fileList.innerHTML = '';

      const files = e.target.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = files[i].name;
          fileList.appendChild(listItem);
        }
      } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Нет файлов';
        fileList.appendChild(listItem);
      }
    });
  });
}

export {showUploadedFiles};
