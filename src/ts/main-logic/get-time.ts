import { Nullable } from '../types';

export function getTime() {
    const blockTimeMinute: Nullable<HTMLDivElement> =
        document.querySelector('#timer-value-min');

    const blockTimeSec: Nullable<HTMLDivElement> =
        document.querySelector('#timer-value-sec');

    const timeMinute: string | null | undefined = blockTimeMinute?.textContent;
    const timeSec: string | null | undefined = blockTimeSec?.textContent;

    return `${timeMinute}.${timeSec}`;
}
