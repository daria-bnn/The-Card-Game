window.application.blocks['create-form'] = createForm;

function createForm(container) {
    container.appendChild(createTempleteCart(blockForm()));

    const form = container.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const button = event.target.querySelectorAll('.form__button');
        const inputs = event.target.querySelectorAll('.block-options__input');

        let checkValidate = false;

        inputs.forEach(input => {
            if (input.checked) {
                checkValidate = true;
            };
        });

        if (!checkValidate) {
            console.log('ничего не выбрано')
        }
    })
}
