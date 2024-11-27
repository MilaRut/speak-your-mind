const hiddenInput = document.querySelector('#user_photo');
const fileName = document.querySelector('.settings__avatar-filename');

function uploadUserPhoto() {
  if (!fileName) {
    return;
  }

  hiddenInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      fileName.textContent = files[0].name;
      hiddenInput.value = visibleInput.value;
    } else {
      fileName.textContent = 'файл не выбран';
      hiddenInput.value = '';
    }
  });
}

export {uploadUserPhoto};
