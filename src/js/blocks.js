window.application.blocks['create-form'] = createForm;
window.application.blocks['create-timer-for-game'] = createTimerForGame;
window.application.blocks['create-button'] = createButton;
window.application.blocks['create-cards'] = createCards;

function createForm(container) {
    container.appendChild(createTempleteCart(blockForm()));

    const form = container.querySelector('.form');
    const inputs = container.querySelectorAll('.block-options__input');
    const error = container.querySelector('.form__error');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const button = event.target.querySelector('.form__button');

        let checkValidate = false;

        makeButtonInactive(button);

        inputs.forEach((input) => {
            if (input.checked) {
                checkValidate = true;

                window.application.numberOfCards =
                    window.levelsGame[input.value];

                window.application.renderScreen('render-game-page');
            }
        });

        if (!checkValidate) {
            makeButtonActive(button);

            error.classList.remove('form__error_hidden');
        }

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                error.classList.add('form__error_hidden');
            });
        });
    });
}

function createTimerForGame(container) {
    container.appendChild(createTempleteCart(timer()));

    const timerValue = container.querySelector('.block-timer__value');
}

function createButton(container) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Начать заново';

    container.appendChild(button);
}

function createCards(container) {
    const cardsValue = createCardValues(cardSuit, cardValue);

    cardsValue.forEach((card) => {
        container.appendChild(createTempleteCart(cardsElement(card)));
    });

    const cardsBackground = container.querySelectorAll(
        '.block-game__card-wrapper'
    );

    setTimeout(() => {
        cardsBackground.forEach((card) => {
            card.classList.remove('block-game__card-wrapper_hidden');
        });
    }, 5000);
}
