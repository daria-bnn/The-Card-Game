import { Nullable } from '../types';

export function changeAttemptValue() {
    const attempt: Nullable<HTMLParagraphElement> =
        document.querySelector('.attempt__value');

    if (!attempt) return;

    attempt.textContent = String(window.attempt);
}
