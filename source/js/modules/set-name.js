function setName() {
  const userName = localStorage.getItem('user_name');
  document.querySelectorAll('.gotten-username').forEach((el) => {
    el.textContent = userName;
  });
}

export {setName};
