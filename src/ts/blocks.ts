const ImgWin = require('../img/win.png');
const ImgLoss = require('../img/loss.png');

import { createTempleteCart } from './template-engine/create-template-card';

import { blockForm } from './blocks-html/form';
import { timer } from './blocks-html/timer';
import { cardsElement } from './blocks-html/cards-element';
import { blockResult } from './blocks-html/result-block-element';

import {
    counterTimes,
    getRandomArrayCards,
    getTime,
    checkCards,
} from './main-logic-game';

import { makeButtonInactive, makeButtonActive } from './utils/utils';

export function createForm(container: HTMLDivElement) {
    container?.appendChild(createTempleteCart(blockForm()));

    const form: HTMLFormElement | null = container.querySelector('.form');
    const inputs: NodeListOf<HTMLInputElement> = container.querySelectorAll(
        '.block-options__input'
    );
    const error = container.querySelector('.form__error');

    form?.addEventListener('submit', (event): void => {
        event.preventDefault();

        const button: HTMLButtonElement | null =
            container.querySelector('.form__button');

        let checkValidate: boolean = false;

        makeButtonInactive(button);

        inputs.forEach((input) => {
            if (input.checked) {
                checkValidate = true;

                if (
                    input.value === 'light' ||
                    input.value === 'medium' ||
                    input.value === 'hard'
                ) {
                    window.numberOfCards = window.levelsGame[input.value].cards;
                    window.attempt = window.levelsGame[input.value].attempt;
                }

                window.application.renderScreen('render-game-page');
            }
        });

        if (!checkValidate) {
            makeButtonActive(button);

            error?.classList.remove('form__error_hidden');
        }

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                error?.classList.add('form__error_hidden');
            });
        });
    });
}

export function createTimerForGame(container: HTMLDivElement) {
    container?.appendChild(createTempleteCart(timer()));

    const startCounterTimer: any = counterTimes(container);

    const intervalForTime = setInterval(startCounterTimer, 1000);

    window.application.timers.push(intervalForTime);
}

export function createButton(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Начать заново';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}

export function createCards(container: HTMLDivElement) {
    getRandomArrayCards().forEach((card) => {
        container.appendChild(createTempleteCart(cardsElement(card)));
    });

    const cardsBackground = container.querySelectorAll(
        '.block-game__card-wrapper'
    );

    setTimeout(() => {
        cardsBackground.forEach((card) => {
            card.classList.add('flip');
        });
    }, 5000);

    const startCheckCards = checkCards();

    container.addEventListener('click', startCheckCards);
}

export function createAttempts(container: HTMLDivElement) {
    const blockAttempt = document.createElement('div');
    blockAttempt.classList.add('attempt');

    const attemptTitle = document.createElement('p');
    attemptTitle.classList.add('attempt__title');
    attemptTitle.textContent = 'попытки';

    const attemptValue = document.createElement('p');
    attemptValue.classList.add('attempt__value');
    attemptValue.textContent = String(window.attempt);

    blockAttempt.appendChild(attemptTitle);
    blockAttempt.appendChild(attemptValue);

    container.appendChild(blockAttempt);
}

export function createBlockLoss(container: HTMLDivElement) {
    container.appendChild(
        createTempleteCart(blockResult(ImgLoss, 'проиграли'))
    );
}

export function createBlockWin(container: HTMLDivElement) {
    container.appendChild(createTempleteCart(blockResult(ImgWin, 'победили')));
}

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

export function createButtonAgain(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Играть снова';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}
