const userName = document.querySelectorAll('.clients__client-name');
const clientCard = document.querySelector('.client-card');

function setClientCard() {
  if (clientCard) {
    const cardName = clientCard.querySelector('.client-card__username');
    const cardId = clientCard.querySelector('.client-card__userid');
    const cardAge = clientCard.querySelector('.client-card__age');
    const cardAmount = clientCard.querySelector('.client-card__sessions-amount');
    const cardNextSession = clientCard.querySelector('.client-card__next-session');

    userName.forEach((user) => {
      const currentItem = user.closest('.clients__item');
      const currentId = currentItem.querySelector('.clients__client-id');
      const currentAge = currentItem.querySelector('.clients__client-age');
      const currentAmount = currentItem.querySelector('.clients__sessions-amount');
      const currentNextSession = currentItem.querySelector('.clients__next-session');
      user.addEventListener('click', function () {
        cardName.textContent = user.textContent;
        cardId.textContent = currentId.textContent;
        cardAge.textContent = currentAge.textContent;
        cardAmount.textContent = currentAmount.textContent;
        cardNextSession.textContent = currentNextSession.textContent;
      });
    });
  }
}

export {setClientCard};
