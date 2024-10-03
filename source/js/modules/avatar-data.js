const avatarInput = document.querySelector('#avatar');
const hiddenAvatarInput = document.querySelector('#avatar-hidden');
const avatarForm = document.querySelector('#avatar-upload-form');

function saveAvatarData() {
  if (!avatarForm) {
    return;
  }
  avatarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (avatarInput.files.length > 0) {
      hiddenAvatarInput.files = avatarInput.files;
      avatarForm.closest('.modal').classList.remove('is-active');
    }
  });
}

export {saveAvatarData};

