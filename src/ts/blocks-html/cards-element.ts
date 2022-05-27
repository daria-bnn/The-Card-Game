const ImgBackground = require('/src/img/background.png');

export function cardsElement(card) {
    return {
        tag: 'div',
        cls: ['block-game__card-wrapper'],
        attrs: {
            ['data-value-card']: card.cardName,
        },
        content: [
            {
                tag: 'div',
                cls: [
                    'card-block__background',
                    'card-block__background_hidden',
                ],
                content: {
                    tag: 'img',
                    attrs: {
                        src: ImgBackground,
                        alt: 'background',
                    },
                },
            },
            {
                tag: 'div',
                cls: ['block-game__card', 'card-block'],
                content: [
                    {
                        tag: 'div',
                        cls: ['card-block__suit-main'],
                        content: {
                            tag: 'img',
                            attrs: {
                                src: card.cardImage,
                                alt: 'card suit',
                            },
                        },
                    },
                    {
                        tag: 'div',
                        cls: ['card-block__info', 'card-block__info_top'],
                        content: [
                            {
                                tag: 'p',
                                cls: ['card-block__name'],
                                content: card.cardValue,
                            },
                            {
                                tag: 'div',
                                cls: [
                                    'card-block__suit',
                                    'card-block__suit_upside',
                                ],
                                content: {
                                    tag: 'img',
                                    attrs: {
                                        src: card.cardImage,
                                        alt: 'card suit',
                                    },
                                },
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        cls: ['card-block__info', 'card-block__info_bottom'],
                        content: [
                            {
                                tag: 'div',
                                cls: ['card-block__suit'],
                                content: {
                                    tag: 'img',
                                    attrs: {
                                        src: card.cardImage,
                                        alt: 'card suit',
                                    },
                                },
                            },
                            {
                                tag: 'p',
                                cls: ['card-block__name'],
                                content: card.cardValue,
                            },
                        ],
                    },
                ],
            },
        ],
    };
}
