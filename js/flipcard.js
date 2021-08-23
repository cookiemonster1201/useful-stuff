(() => {
  const refs = {
    flipCardBack: document.querySelector('[data-flip-back]'),
    flipCardFront: document.querySelector('[data-flip-front]'),
    card: document.querySelector('[data-card]'),
  };

  refs.flipCardBack.addEventListener('click', toggleCard);
  refs.flipCardFront.addEventListener('click', toggleCard);
  

  function toggleCard() {
    refs.card.classList.toggle('is-flipped');
  }
})();


(() => {
  const refs = {
    flipCardBack: document.querySelector('[data-flip-back]'),
    flipCardFront: document.querySelector('[data-flip-front]'),
    card: document.querySelector('[data-card]'),
  };

  // refs.flipCardBacks.addEventListener('click', toggleCards);
  refs.flipCardFront.addEventListener('click', toggleCard);
  refs.flipCardBack.addEventListener('click', forward);

  function toggleCard() {
    refs.card.classList.toggle('is-flipped-back');
  }

  function forward() {
    refs.card.classList.remove('is-flipped-back');
  }
})();

switch (password) {
      
  case null:
    message = "Canceled by user!";
    break;
    
  case ADMIN_PASSWORD:
   message = "Welcome!"; 
    break;
    
   default: 
    message = "Access denied, wrong password!"; 

    return message;
}