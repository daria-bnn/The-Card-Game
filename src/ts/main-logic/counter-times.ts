import { Nullable } from '../types';

export function counterTimes(container: HTMLDivElement) {
    const valueMinute: Nullable<HTMLSpanElement> =
        container.querySelector('[timer-value-min]');
    const valueSecond: Nullable<HTMLSpanElement> =
        container.querySelector('[timer-value-sec]');

    if (!valueMinute || !valueSecond) return;

    let minute: number = 0,
        second: number = -5;

    const result = () => {
        second++;

        if (second < 0) return;

        if (second < 10) {
            valueSecond.textContent = `0${second}`;

            return;
        }

        valueSecond.textContent = `${second}`;

        if (second > 59) {
            second = 0;
            valueSecond.textContent = `0${second}`;
            minute++;
        }

        if (minute < 10) {
            valueMinute.textContent = `0${minute}`;

            return;
        }

        valueMinute.textContent = `${minute}`;
    };

    return result;
}
