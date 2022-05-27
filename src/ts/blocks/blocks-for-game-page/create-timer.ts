import { createTempleteCart } from '../../template-engine/create-template-card';
import { timer } from '../../blocks-html/timer';
import { counterTimes } from '../../main-logic-game';

export function createTimerForGame(container: HTMLDivElement) {
    container?.appendChild(createTempleteCart(timer()));

    const startCounterTimer: any = counterTimes(container);

    const intervalForTime = setInterval(startCounterTimer, 1000);

    window.application.timers.push(intervalForTime);
}
