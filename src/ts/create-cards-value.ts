import heartsImg from '../img/hearts.png';
import spadesImg from '../img/spades.png';
import diamondsImg from '../img/diamonds.png';
import clubsImg from '../img/clubs.png';

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

function createObjCard(
    value: string,
    cardSuits: CardSuit[],
    index: number,
    arrayCard: Card[]
) {
    const infoAboutCardSpades: Card = {};
    infoAboutCardSpades.cardValue = value;
    infoAboutCardSpades.cardImage = cardSuits[index].image;
    infoAboutCardSpades.cardName = `${value}-${cardSuits[0].color}`;
    arrayCard.push(infoAboutCardSpades);
}

export function createCardValues(
    cardSuits: CardSuit[],
    cardValues: string[]
): Card[] {
    const arrayCard: Card[] = [];

    cardValues.forEach((value) => {
        createObjCard(value, cardSuits, 0, arrayCard);
        createObjCard(value, cardSuits, 1, arrayCard);
        createObjCard(value, cardSuits, 2, arrayCard);
        createObjCard(value, cardSuits, 3, arrayCard);
    });

    return arrayCard;
}
