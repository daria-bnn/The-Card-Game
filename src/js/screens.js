window.application.screens['render-start-page'] = renderStartPage;
window.application.screens['render-game-page'] = renderGamePage;

function renderStartPage() {
    const wrapper = document.querySelector('.block-game');

    wrapper.innerHTML = '';

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('block-game__info-block');

    window.application.renderBlock('create-form', infoBlock);

    wrapper.appendChild(infoBlock);
}

function renderGamePage() {
    const wrapper = document.querySelector('.block-game');

    wrapper.innerHTML = '';

    const blockCards = document.createElement('div');
    blockCards.classList.add('block-game__cards');

    const blockInfo = document.createElement('div');
    blockInfo.classList.add('block-game__info');

    const cards = createCardValues(cardSuit, cardValue);

    window.application.renderBlock('create-cards', blockCards);

    window.application.renderBlock('create-timer-for-game', blockInfo);
    window.application.renderBlock('create-button', blockInfo);

    wrapper.appendChild(blockInfo);
    wrapper.appendChild(blockCards);
}
