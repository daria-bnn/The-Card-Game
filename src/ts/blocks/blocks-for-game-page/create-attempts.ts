export function createAttempts(container: HTMLDivElement) {
    const blockAttempt = document.createElement('div');
    blockAttempt.classList.add('attempt');

    const attemptTitle = document.createElement('p');
    attemptTitle.classList.add('attempt__title');
    attemptTitle.textContent = 'попытки';

    const attemptValue = document.createElement('p');
    attemptValue.classList.add('attempt__value');
    attemptValue.textContent = String(window.attempt);

    blockAttempt.appendChild(attemptTitle);
    blockAttempt.appendChild(attemptValue);

    container.appendChild(blockAttempt);
}
