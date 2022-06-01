import heartsImg from '../img/hearts.png';
import spadesImg from '../img/spades.png';
import diamondsImg from '../img/diamonds.png';
import clubsImg from '../img/clubs.png';

import * as lodash from 'lodash';

import { CardSuit, Card } from './types';

export const cardValue = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6'];

export const cardSuit = [
    {
        image: spadesImg,
        color: 'spades',
    },
    {
        image: heartsImg,
        color: 'hearts',
    },
    {
        image: diamondsImg,
        color: 'diamonds',
    },
    {
        image: clubsImg,
        color: 'clubs',
    },
];

function createCard(value: string, cardSuits: CardSuit[], index: number) {
    const infoAboutCardSpades: Card = {};
    infoAboutCardSpades.cardValue = value;
    infoAboutCardSpades.cardImage = cardSuits[index].image;
    infoAboutCardSpades.cardName = `${value}-${cardSuits[index].color}`;
    return infoAboutCardSpades;
}

const startCreateCard = lodash.curry(createCard);

export function createCardValues(
    cardSuits: CardSuit[],
    cardValues: string[]
): Card[] {
    const arrayCard: Card[] = [];

    cardValues.forEach((value) => {
        const cardValue = startCreateCard(value);
        const cardSuit = cardValue(cardSuits);

        arrayCard.push(cardSuit(0));
        arrayCard.push(cardSuit(1));
        arrayCard.push(cardSuit(2));
        arrayCard.push(cardSuit(3));
    });

    return arrayCard;
}
