import ImgBackground from '/src/img/background.png';

import { HtmlEl, Card } from '../types';

export function cardsElement(card: Card): HtmlEl {
    return {
        tag: 'div',
        cls: ['block-cards__card-wrapper'],
        attrs: {
            ['data-value-card']: card.cardName,
        },
        content: [
            {
                tag: 'div',
                cls: ['card-block__background'],
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
                cls: ['block-game__cards', 'card-block'],
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
                        cls: ['card-block__info', 'info-card', 'info-card_top'],
                        content: [
                            {
                                tag: 'p',
                                cls: ['info-card__name'],
                                content: card.cardValue,
                            },
                            {
                                tag: 'div',
                                cls: ['info-card__suit'],
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
                        cls: [
                            'card-block__info',
                            'info-card',
                            'info-card_bottom',
                        ],
                        content: [
                            {
                                tag: 'p',
                                cls: ['info-card__name'],
                                content: card.cardValue,
                            },
                            {
                                tag: 'div',
                                cls: ['info-card__suit'],
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
                ],
            },
        ],
    };
}
