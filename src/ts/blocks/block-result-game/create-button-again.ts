export function createButtonAgain(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Играть снова';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}
