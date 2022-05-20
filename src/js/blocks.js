import { createTempleteCart } from './create-template-card';

import { blockForm } from './blocks-html/form';
import { timer } from './blocks-html/timer';
import { cardsElement } from './blocks-html/cards-element';

import { makeButtonInactive, makeButtonActive } from './utils';

import {
    counterTimes,
    getRandomArrayCards,
    checkCards,
} from './main-logic-game';

function createForm(container) {
    container.appendChild(createTempleteCart(blockForm()));

    const form = container.querySelector('.form');
    const inputs = container.querySelectorAll('.block-options__input');
    const error = container.querySelector('.form__error');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const button = event.target.querySelector('.form__button');

        let checkValidate = false;

        makeButtonInactive(button);

        inputs.forEach((input) => {
            if (input.checked) {
                checkValidate = true;

                window.application.numberOfCards =
                    window.levelsGame[input.value];

                window.application.renderScreen('render-game-page');
            }
        });

        if (!checkValidate) {
            makeButtonActive(button);

            error.classList.remove('form__error_hidden');
        }

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                error.classList.add('form__error_hidden');
            });
        });
    });
}

function createTimerForGame(container) {
    container.appendChild(createTempleteCart(timer()));

    const startCounterTimer = counterTimes(container);

    const intervalForTime = setInterval(startCounterTimer, 1000);

    window.application.timers.push(intervalForTime);
}

function createButton(container) {
    const button = document.createElement('button');
    button.classList.add('button', 'block-game__button');
    button.textContent = 'Начать заново';

    button.addEventListener('click', () => {
        window.application.renderScreen('render-start-page');
    });

    container.appendChild(button);
}

function createCards(container) {
    getRandomArrayCards().forEach((card) => {
        container.appendChild(createTempleteCart(cardsElement(card)));
    });

    const cardsBackground = container.querySelectorAll(
        '.block-game__card-wrapper'
    );

    setTimeout(() => {
        cardsBackground.forEach((card) => {
            card.classList.add('block-game__card-wrapper_background');
        });
    }, 5000);

    const startCheckCards = checkCards();

    container.addEventListener('click', startCheckCards);
}

export { createForm, createTimerForGame, createButton, createCards };
