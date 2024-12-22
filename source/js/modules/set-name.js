const userNameText = document.querySelectorAll('.gotten-username');

function setName() {

  if (!userNameText) {
    return;
  }

  const userName = localStorage.getItem('user_name');
  userNameText.forEach((el) => {
    el.textContent = userName;
  });
}

export {setName};
