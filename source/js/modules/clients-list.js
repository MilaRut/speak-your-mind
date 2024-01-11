const sessions = document.querySelector('.sessions ');
const clientItem = document.querySelectorAll('.sessions__clients-item');
const videochatClientName = document.querySelector('.videochat__client-name');
const videochatClientId = document.querySelector('.videochat__client-id');
const videochatDate = document.querySelector('.videochat__date');

function clearClasses() {
  clientItem.forEach((item) => {
    item.classList.remove('is-active');
  });
}

function setActiveItem() {
  if (sessions) {
    clientItem[0].classList.add('is-active');
    videochatClientName.textContent = clientItem[0].querySelector('.sessions__client-name').textContent;
    videochatClientId.textContent = clientItem[0].querySelector('.sessions__client-id').textContent;
    videochatDate.textContent = clientItem[0].querySelector('.sessions__date').textContent;

    clientItem.forEach((item) => {
      const currentItem = item;
      const currentClientName = currentItem.querySelector('.sessions__client-name');
      const currentClientId = currentItem.querySelector('.sessions__client-id');
      const currentDate = currentItem.querySelector('.sessions__date');
      item.addEventListener('click', function () {
        clearClasses();
        currentItem.classList.add('is-active');
        videochatClientName.textContent = currentClientName.textContent;
        videochatClientId.textContent = currentClientId.textContent;
        videochatDate.textContent = currentDate.textContent;
      });
    });
  }
}

export {setActiveItem};
