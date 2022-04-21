window.application.screens['render-start-page'] = renderStartPage;

function renderStartPage() {
    const wrapper = document.querySelector('.block-game');

    wrapper.innerHTML = '';

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('block-game__info-block');

    window.application.renderBlock('create-form', infoBlock);

    wrapper.appendChild(infoBlock);
}