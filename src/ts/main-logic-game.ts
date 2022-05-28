import { Card } from './types';

import { createCardValues, cardSuit, cardValue } from './create-cards-value';

import { addAnimation, deleteAnimationClass } from './utils/utils';

export function counterTimes(container: HTMLDivElement) {
    const valueMinute: HTMLSpanElement | null = container.querySelector(
        '.block-timer__value-minute'
    );
    const valueSecond: HTMLSpanElement | null = container.querySelector(
        '.block-timer__value-sec'
    );

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

export function getRandomArrayCards(): Card[] {
    const cardsValue: Card[] = createCardValues(cardSuit, cardValue);

    let randomArray: Card[] = [];

    for (let i = 0; i < window.numberOfCards; i++) {
        let randomNumber: number =
            Math.floor(Math.random() * (cardsValue.length - 0)) + 0;

        if (randomArray.length > 0) {
            const checkCardInArray = randomArray.find(
                (item) => item.cardName === cardsValue[randomNumber]['cardName']
            );

            if (checkCardInArray) {
                i--;

                continue;
            }
        }

        randomArray.push(cardsValue[randomNumber]);
        randomArray.push(cardsValue[randomNumber]);
    }

    randomArray.sort(() => Math.random() - 0.5);

    return randomArray;
}

export function checkCards() {
    let firstCard: HTMLDivElement | null,
        secondCard: HTMLDivElement | null,
        numberOfWin: number = 0,
        numberOfattempt: number = window.attempt;

    const result = (event) => {
        const target = event.target;

        if (
            !target.closest('.block-cards__card-wrapper_background') &&
            !target.closest('.flip')
        )
            return;

        if (firstCard && secondCard) return;

        if (!firstCard) {
            firstCard = target.closest('.block-cards__card-wrapper');
            firstCard?.classList.remove('flip');

            return;
        }

        secondCard = target.closest('.block-cards__card-wrapper');
        secondCard?.classList.remove('flip');

        if (firstCard?.dataset.valueCard === secondCard?.dataset.valueCard) {
            firstCard = null;
            secondCard = null;

            numberOfWin++;

            if (numberOfWin === window.numberOfCards) {
                window.application.renderScreen('render-win-page');
            }

            return;
        }

        deleteAnimationClass();

        setTimeout(() => {
            firstCard?.classList.add('flip');
            secondCard?.classList.add('flip');

            firstCard = null;
            secondCard = null;

            numberOfattempt--;
            window.attempt = numberOfattempt;

            addAnimation();
            changeAttemptValue();

            if (numberOfattempt === 0) {
                window.application.renderScreen('render-loss-page');
            }
        }, 500);
    };

    return result;
}

export function changeAttemptValue() {
    const attempt: HTMLParagraphElement | null =
        document.querySelector('.attempt__value');

    if (!attempt) return;

    attempt.textContent = String(window.attempt);
}

export function getTime() {
    const blockTimeMinute: HTMLDivElement | null = document.querySelector(
        '.block-timer__value-minute'
    );

    const blockTimeSec: HTMLDivElement | null = document.querySelector(
        '.block-timer__value-sec'
    );

    const timeMinute: string | null | undefined = blockTimeMinute?.textContent;
    const timeSec: string | null | undefined = blockTimeSec?.textContent;

    return `${timeMinute}.${timeSec}`;
}
