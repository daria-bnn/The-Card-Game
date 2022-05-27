export function createButton(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Начать заново';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}
