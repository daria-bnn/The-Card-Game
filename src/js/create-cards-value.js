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

    cardSuit.forEach((card) => {
        cardValue.forEach((value) => {
            const infoAboutCard = {};

            infoAboutCard.cardValue = value;
            infoAboutCard.cardImage = card.image;
            infoAboutCard.cardName = `${value}-${card.color}`;

            arrayCard.push(infoAboutCard);
        });
    });

    return arrayCard;
}

export { createCardValues, cardSuit, cardValue };
