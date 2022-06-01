import { Nullable } from '../types';

export function getTime() {
    const blockTimeMinute: Nullable<HTMLElement> =
        document.getElementById('timer-value-min');

    const blockTimeSec: Nullable<HTMLElement> =
        document.getElementById('timer-value-sec');

    const timeMinute: string | null | undefined = blockTimeMinute?.textContent;
    const timeSec: string | null | undefined = blockTimeSec?.textContent;

    return `${timeMinute}.${timeSec}`;
}
