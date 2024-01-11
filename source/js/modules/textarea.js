const docForm = document.getElementById('doctor-settings-form');
const message = document.getElementById('doctor-about');
const count = document.getElementById('symbols-count');
const MAX = 2000;


function validateTextarea() {
  if (docForm) {
    docForm.addEventListener('input', function () {
      count.textContent = String(MAX - message.value.length);
    });
  }
}

export {validateTextarea};
