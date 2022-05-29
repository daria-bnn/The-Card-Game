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

export function createCardValues(
    cardSuits: CardSuit[],
    cardValues: string[]
): Card[] {
    const arrayCard: Card[] = [];

    cardValues.forEach((value) => {
        const infoAboutCardSpades: Card = {};
        infoAboutCardSpades.cardValue = value;
        infoAboutCardSpades.cardImage = cardSuits[0].image;
        infoAboutCardSpades.cardName = `${value}-${cardSuits[0].color}`;
        arrayCard.push(infoAboutCardSpades);

        const infoAboutCardHearts: Card = {};
        infoAboutCardHearts.cardValue = value;
        infoAboutCardHearts.cardImage = cardSuits[1].image;
        infoAboutCardHearts.cardName = `${value}-${cardSuits[1].color}`;
        arrayCard.push(infoAboutCardHearts);

        const infoAboutCardDiamonds: Card = {};
        infoAboutCardDiamonds.cardValue = value;
        infoAboutCardDiamonds.cardImage = cardSuits[2].image;
        infoAboutCardDiamonds.cardName = `${value}-${cardSuits[2].color}`;
        arrayCard.push(infoAboutCardDiamonds);

        const infoAboutCardClubs: Card = {};
        infoAboutCardClubs.cardValue = value;
        infoAboutCardClubs.cardImage = cardSuits[3].image;
        infoAboutCardClubs.cardName = `${value}-${cardSuits[3].color}`;
        arrayCard.push(infoAboutCardClubs);
    });

    return arrayCard;
}
