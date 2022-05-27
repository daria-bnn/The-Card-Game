import { createTempleteCart } from '../../template-engine/create-template-card';
import { cardsElement } from '../../blocks-html/cards-element';

import { getRandomArrayCards, checkCards } from '../../main-logic-game';

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
