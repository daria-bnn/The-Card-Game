const cardValue = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6'];

const cardSuit = [
    {
        image: './src/img/spades.png',
        color: 'spades',
    },
    {
        image: './src/img/hearts.png',
        color: 'hearts',
    },
    {
        image: './src/img/diamonds.png',
        color: 'diamonds',
    },
    {
        image: './src/img/clubs.png',
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
