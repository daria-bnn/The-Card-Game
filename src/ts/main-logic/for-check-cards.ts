import { Nullable } from '../types';
import { addAnimation, deleteAnimationClass } from '../utils/utils';
import { changeAttemptValue } from './change-attempt';

function hideCard(
    firstCard: Nullable<HTMLDivElement>,
    secondCard: Nullable<HTMLDivElement>,
    numberOfattempt: number
) {
    firstCard?.classList.add('flip');
    secondCard?.classList.add('flip');

    if (!firstCard || !secondCard) return;

    firstCard.dataset.showCard = 'false';
    secondCard.dataset.showCard = 'false';

    numberOfattempt--;
    window.attempt = numberOfattempt;
}

export function checkCards() {
    let firstCard: Nullable<HTMLDivElement>,
        secondCard: Nullable<HTMLDivElement>,
        numberOfWin: number = 0,
        numberOfattempt: number;

    const result = (event) => {
        const target = event.target;

        numberOfattempt = window.attempt;

        if (
            !target.closest('[data-show-card]') ||
            target.closest("[data-show-card='true']")
        ) {
            return;
        }

        if (firstCard && secondCard) return;

        if (!firstCard) {
            firstCard = target.closest("[data-show-card='false']");
            if (!firstCard) return;

            firstCard.dataset.showCard = 'true';
            firstCard?.classList.remove('flip');

            return;
        }

        secondCard = target.closest("[data-show-card='false']");
        secondCard?.classList.remove('flip');
        if (secondCard) secondCard.dataset.showCard = 'true';

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
            hideCard(firstCard, secondCard, numberOfattempt);

            firstCard = null;
            secondCard = null;

            addAnimation();
            changeAttemptValue();

            if (window.attempt === 0) {
                window.application.renderScreen('render-loss-page');
            }
        }, 500);
    };

    return result;
}
