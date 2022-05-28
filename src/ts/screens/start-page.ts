export function renderStartPage(): void {
    const wrapper: HTMLDivElement | null =
        document.querySelector('.block-game');

    if (wrapper) {
        wrapper.innerHTML = '';
    }

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('reg-block');

    window.application.renderBlock('create-form', infoBlock);

    wrapper?.appendChild(infoBlock);
}