import { createTempleteCart } from '../../template-engine/create-template-card';
import { timer } from '../../blocks-html/timer';
import { counterTimes } from '../../main-logic/counter-times';

export function createTimerForGame(container: HTMLDivElement) {
    container?.appendChild(createTempleteCart(timer()));

    const startCounterTimer = counterTimes(container);

    if (startCounterTimer) {
        const intervalForTime = window.setInterval(startCounterTimer, 1000);
        window.application.timers.push(intervalForTime);
    }
}
