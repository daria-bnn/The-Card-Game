import heartsImg from '../img/hearts.png';
import spadesImg from '../img/spades.png';
import diamondsImg from '../img/diamonds.png';
import clubsImg from '../img/clubs.png';

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

function createCardValues(cardSuit, cardValue) {
    const arrayCard = [];

    cardValue.forEach((value) => {
        const infoAboutCardSpades = {};
        infoAboutCardSpades.cardValue = value;
        infoAboutCardSpades.cardImage = cardSuit[0].image;
        infoAboutCardSpades.cardName = `${value}-${cardSuit[0].color}`;
        arrayCard.push(infoAboutCardSpades);

        const infoAboutCardHearts = {};
        infoAboutCardHearts.cardValue = value;
        infoAboutCardHearts.cardImage = cardSuit[1].image;
        infoAboutCardHearts.cardName = `${value}-${cardSuit[1].color}`;
        arrayCard.push(infoAboutCardHearts);

        const infoAboutCardDiamonds = {};
        infoAboutCardDiamonds.cardValue = value;
        infoAboutCardDiamonds.cardImage = cardSuit[2].image;
        infoAboutCardDiamonds.cardName = `${value}-${cardSuit[2].color}`;
        arrayCard.push(infoAboutCardDiamonds);

        const infoAboutCardClubs = {};
        infoAboutCardClubs.cardValue = value;
        infoAboutCardClubs.cardImage = cardSuit[3].image;
        infoAboutCardClubs.cardName = `${value}-${cardSuit[3].color}`;
        arrayCard.push(infoAboutCardClubs);
    });

    return arrayCard;
}

export { createCardValues, cardSuit, cardValue };
