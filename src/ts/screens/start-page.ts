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
