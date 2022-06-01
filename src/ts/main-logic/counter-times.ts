import { Nullable } from '../types';

export function counterTimes() {
    const valueMinute: Nullable<HTMLSpanElement> =
        document.getElementById('timer-value-min');
    const valueSecond: Nullable<HTMLSpanElement> =
        document.getElementById('timer-value-sec');

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
