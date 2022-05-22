export function renderStartPage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    if (wrapper) {
        wrapper.innerHTML = '';
    }

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('block-game__info-block');

    window.application.renderBlock('create-form', infoBlock);

    wrapper?.appendChild(infoBlock);
}

export function renderGamePage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    if (wrapper) {
        wrapper.innerHTML = '';
    }

    const blockCards = document.createElement('div');
    blockCards.classList.add('block-game__cards');

    const blockInfo = document.createElement('div');
    blockInfo.classList.add('block-game__info');

    window.application.renderBlock('create-cards', blockCards);

    window.application.renderBlock('create-timer-for-game', blockInfo);
    window.application.renderBlock('create-attemts', blockInfo);
    window.application.renderBlock('create-button', blockInfo);

    wrapper?.appendChild(blockInfo);
    wrapper?.appendChild(blockCards);
}

export function renderWinPage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    const fixedBlock: HTMLDivElement = document.createElement('div');
    fixedBlock.classList.add('block-game__result', 'result');

    const blockBackground: HTMLDivElement = document.createElement('div');
    blockBackground.classList.add('result__background');

    window.application.renderBlock('create-block-win', blockBackground);
    window.application.renderBlock('create-block-show-time', blockBackground);
    window.application.renderBlock('create-button-again', blockBackground);

    fixedBlock?.appendChild(blockBackground);
    wrapper?.appendChild(fixedBlock);
}

export function renderLossPage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    const fixedBlock: HTMLDivElement = document.createElement('div');
    fixedBlock.classList.add('block-game__result', 'result');

    const blockBackground: HTMLDivElement = document.createElement('div');
    blockBackground.classList.add('result__background');

    window.application.renderBlock('create-block-loss', blockBackground);
    window.application.renderBlock('create-block-show-time', blockBackground);
    window.application.renderBlock('create-button-again', blockBackground);

    fixedBlock?.appendChild(blockBackground);
    wrapper?.appendChild(fixedBlock);
}
