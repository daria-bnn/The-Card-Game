import { Nullable } from '../types';

export function changeAttemptValue() {
    const attempt: Nullable<HTMLParagraphElement> =
        document.querySelector('[data-attempt]');

    if (!attempt) return;

    attempt.textContent = String(window.attempt);
}
