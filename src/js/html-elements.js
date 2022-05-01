function blockForm() {
    return {
        tag: 'form',
        cls: ['block-game__form', 'form'],
        content: [
            {
                tag: 'label',
                cls: ['form__title'],
                content: 'Выберите сложность',
            },
            {
                tag: 'div',
                cls: ['form__block-options', 'block-options'],
                content: [
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-light',
                            name: 'difficulty',
                            value: 'light',
                        },
                    },
                    {
                        tag: 'label',
                        content: '1',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-light',
                        },
                    },
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-medium',
                            name: 'difficulty',
                            value: 'medium',
                        },
                    },
                    {
                        tag: 'label',
                        content: '2',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-medium',
                        },
                    },
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-hard',
                            name: 'difficulty',
                            value: 'hard',
                        },
                    },
                    {
                        tag: 'label',
                        content: '3',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-hard',
                        },
                    },
                ],
            },
            {
                tag: 'button',
                cls: ['form__button', 'button'],
                content: 'Старт',
            },
            {
                tag: 'div',
                cls: ['form__error', 'form__error_hidden'],
                content: 'Нужно выбрать уровень сложности',
            },
        ],
    };
}

function timer() {
    return {
        tag: 'div',
        cls: ['block-timer'],
        content: [
            {
                tag: 'div',
                cls: ['block-timer__name'],
                content: [
                    {
                        tag: 'p',
                        content: 'min',
                    },
                    {
                        tag: 'p',
                        content: 'sek',
                    },
                ],
            },
            {
                tag: 'div',
                cls: ['block-timer__value'],
                content: '00.00',
            },
        ],
    };
}

function cardsElement(card) {
    return {
        tag: 'div',
        cls: ['block-game__card-wrapper', 'block-game__card-wrapper_hidden'],
        content: [
            {
                tag: 'div',
                cls: ['block-game__card', 'card-block'],
                attrs: {
                    'dataset.value': card.cardName,
                },
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
            {
                tag: 'div',
                cls: [
                    'card-block__background',
                    'card-block__background_hidden',
                ],
                content: {
                    tag: 'img',
                    attrs: {
                        src: './src/img/background.png',
                        alt: 'background',
                    },
                },
            },
        ],
    };
}
