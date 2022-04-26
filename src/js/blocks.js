window.application.blocks['create-form'] = createForm;

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
