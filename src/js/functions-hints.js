function makeButtonInactive(button) {
    button.disabled = 'disabled';
    button.classList.add('button_inactive');
}

function makeButtonActive(button) {
    button.disabled = '';
    button.classList.remove('button_inactive');
}
