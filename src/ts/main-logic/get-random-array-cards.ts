import { Card } from '../types';
import { createCardValues, cardSuit, cardValue } from '../create-cards-value';

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
