const heartsImg = require('../img/hearts.png');
const spadesImg = require('../img/spades.png');
const diamondsImg = require('../img/diamonds.png');
const clubsImg = require('../img/clubs.png');

const cardValue: string[] = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6'];

type Card = {
    image: any;
    color: string;
};

type CardResult = {
    cardValue?: string;
    cardImage?: string;
    cardName?: string;
};

const cardSuit: Card[] = [
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

function createCardValues(cardSuit: Card[], cardValue: string[]): CardResult[] {
    const arrayCard: CardResult[] = [];

    cardSuit.forEach((card: Card): void => {
        cardValue.forEach((value: string): void => {
            const infoAboutCard: CardResult = {};

            infoAboutCard.cardValue = value;
            infoAboutCard.cardImage = card.image;
            infoAboutCard.cardName = `${value}-${card.color}`;

            arrayCard.push(infoAboutCard);
        });
    });

    return arrayCard;
}

export { createCardValues, cardSuit, cardValue };
