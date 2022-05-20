const ImgWin = require('../img/win.png');
const ImgLoss = require('../img/loss.png');

import { createTempleteCart } from './render-function';

import { blockForm, timer, cardsElement, blockResult } from './html-elements';

import {
    makeButtonInactive,
    makeButtonActive,
    counterTimes,
    getRandomArrayCards,
    checkCards,
    getTime,
} from './functions';

function createForm(container: HTMLDivElement) {
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

function createTimerForGame(container: HTMLDivElement) {
    container?.appendChild(createTempleteCart(timer()));

    const startCounterTimer: any = counterTimes(container);

    const intervalForTime = setInterval(startCounterTimer, 1000);

    window.application.timers.push(intervalForTime);
}

function createButton(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Начать заново';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}

function createCards(container: HTMLDivElement) {
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

function createAttempts(container: HTMLDivElement) {
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

//блок вывода победы/проигрыша

//верхняя часть

function createBlockLoss(container: HTMLDivElement) {
    container.appendChild(
        createTempleteCart(blockResult(ImgLoss, 'проиграли'))
    );
}

function createBlockWin(container: HTMLDivElement) {
    container.appendChild(createTempleteCart(blockResult(ImgWin, 'победили')));
}

//время результат

function createBlockresultTime(container: HTMLDivElement) {
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

//кнопка "играть еще"

function createButtonAgain(container: HTMLDivElement) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Играть снова';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}

export {
    createForm,
    createTimerForGame,
    createButton,
    createCards,
    createAttempts,
    createBlockWin,
    createBlockLoss,
    createBlockresultTime,
    createButtonAgain,
};
