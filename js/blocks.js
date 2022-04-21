window.application.blocks['create-form'] = createForm;

function createForm(container) {
    container.appendChild(
        createTempleteCart(blockForm())
    );
}