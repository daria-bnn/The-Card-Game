import { Nullable } from '../types';

export function makeButtonInactive(button: HTMLButtonElement | null): void {
    if (!button) return;

    button.disabled = true;
    button.classList.add('button_inactive');
}

export function makeButtonActive(button: HTMLButtonElement | null): void {
    if (!button) return;

    button.disabled = false;
    button.classList.remove('button_inactive');
}

export function addAnimation() {
    const attempt: HTMLParagraphElement | null =
        document.querySelector('.attempt__value');

    attempt?.classList.add('attempt__value_animation');
}

export function deleteAnimationClass() {
    const attempt: HTMLParagraphElement | null =
        document.querySelector('.attempt__value');

    attempt?.classList.remove('attempt__value_animation');
}
