const isLogged = localStorage.getItem('token') || false;
const wrapper = document.querySelector('.wrapper');

function checkAuth() {
  if (!isLogged) {
    wrapper.classList.add('user-logged');
  } else {
    wrapper.classList.add('user-logged');
  }
}

export {checkAuth};
