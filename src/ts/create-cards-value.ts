const heartsImg = require('../img/hearts.png');
const spadesImg = require('../img/spades.png');
const diamondsImg = require('../img/diamonds.png');
const clubsImg = require('../img/clubs.png');

type Card = {
    image: any;
    color: string;
};

type CardResult = {
    cardValue?: string;
    cardImage?: string;
    cardName?: string;
};

const cardValue = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6'];

const cardSuit = [
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

    cardValue.forEach((value) => {
        const infoAboutCardSpades: CardResult = {};
        infoAboutCardSpades.cardValue = value;
        infoAboutCardSpades.cardImage = cardSuit[0].image;
        infoAboutCardSpades.cardName = `${value}-${cardSuit[0].color}`;
        arrayCard.push(infoAboutCardSpades);

        const infoAboutCardHearts: CardResult = {};
        infoAboutCardHearts.cardValue = value;
        infoAboutCardHearts.cardImage = cardSuit[1].image;
        infoAboutCardHearts.cardName = `${value}-${cardSuit[1].color}`;
        arrayCard.push(infoAboutCardHearts);

        const infoAboutCardDiamonds: CardResult = {};
        infoAboutCardDiamonds.cardValue = value;
        infoAboutCardDiamonds.cardImage = cardSuit[2].image;
        infoAboutCardDiamonds.cardName = `${value}-${cardSuit[2].color}`;
        arrayCard.push(infoAboutCardDiamonds);

        const infoAboutCardClubs: CardResult = {};
        infoAboutCardClubs.cardValue = value;
        infoAboutCardClubs.cardImage = cardSuit[3].image;
        infoAboutCardClubs.cardName = `${value}-${cardSuit[3].color}`;
        arrayCard.push(infoAboutCardClubs);
    });

    return arrayCard;
}

export { createCardValues, cardSuit, cardValue };
