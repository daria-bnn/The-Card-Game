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
}
