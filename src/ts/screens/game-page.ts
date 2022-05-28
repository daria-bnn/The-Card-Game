export function renderGamePage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    if (wrapper) {
        wrapper.innerHTML = '';
    }

    const blockInfo = document.createElement('div');
    blockInfo.classList.add('block-game__info', 'block-info');

    const blockCards = document.createElement('div');
    blockCards.classList.add('block-game__cards', 'block-cards');

    window.application.renderBlock('create-cards', blockCards);

    window.application.renderBlock('create-timer-for-game', blockInfo);
    window.application.renderBlock('create-attemts', blockInfo);
    window.application.renderBlock('create-button', blockInfo);

    wrapper?.appendChild(blockInfo);
    wrapper?.appendChild(blockCards);
}
