import { getTime } from '../../main-logic-game';

export function createBlockresultTime(container: HTMLDivElement) {
    const blockTimeResult = document.createElement('div');
    blockTimeResult.classList.add('result__time', 'time-result');

    const title = document.createElement('p');
    title.classList.add('time-result__title');
    title.textContent = 'Затраченное время:';

    const data = document.createElement('p');
    data.classList.add('time-result__data');

    data.textContent = getTime();

    blockTimeResult.appendChild(title);
    blockTimeResult.appendChild(data);

    container.appendChild(blockTimeResult);
}
