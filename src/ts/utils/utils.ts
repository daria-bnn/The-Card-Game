import { Nullable } from '../types';

export function makeButtonInactive(button: Nullable<HTMLButtonElement>): void {
    if (!button) return;

    button.disabled = true;
    button.classList.add('button_inactive');
}

export function makeButtonActive(button: Nullable<HTMLButtonElement>): void {
    if (!button) return;

    button.disabled = false;
    button.classList.remove('button_inactive');
}

export function addAnimation() {
    const attempt: Nullable<HTMLParagraphElement> =
        document.querySelector('.attempt__value');

    attempt?.classList.add('attempt__value_animation');
}

export function deleteAnimationClass() {
    const attempt: Nullable<HTMLParagraphElement> =
        document.querySelector('.attempt__value');

    attempt?.classList.remove('attempt__value_animation');
}
