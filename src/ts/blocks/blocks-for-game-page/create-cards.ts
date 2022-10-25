import { createTempleteCart } from '../../template-engine/create-template-card';
import { cardsElement } from '../../blocks-html/cards-element';
import { getRandomArrayCards } from '../../main-logic/get-random-array-cards';
import { checkCards } from '../../main-logic/for-check-cards';

export function createCards(container: HTMLDivElement) {
    getRandomArrayCards().forEach((card) => {
        container.appendChild(createTempleteCart(cardsElement(card)));
    });

    const cardsBackground: NodeListOf<HTMLElement> =
        container.querySelectorAll('[data-show-card]');

    setTimeout(() => {
        cardsBackground.forEach((card) => {
            card.classList.add('flip');
            card.dataset.showCard = 'false';
        });
    }, 5000);

    const startCheckCards = checkCards();

    container.addEventListener('click', startCheckCards);
}
