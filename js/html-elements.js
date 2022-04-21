function blockForm() {
    return {
        tag: 'form',
        cls: ['block-game__form', 'form'],
        content: [
            {
                tag: 'label',
                cls: ['form__title'],
                content: 'Выберите сложность'
            },
            {
                tag: 'div',
                cls: ['form__block-options', 'block-options'],
                content: [
                    {
                        tag: 'label',
                        content: '1',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-light',
                        }
                    },
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-light',
                            name: 'difficulty',
                            value: 'light'
                        }
                    },
                    {
                        tag: 'label',
                        content: '2',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-medium',
                        }
                    },
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-medium',
                            name: 'difficulty',
                            value: 'medium'
                        }
                    },
                    {
                        tag: 'label',
                        content: '3',
                        cls: ['block-options__name'],
                        attrs: {
                            for: 'difficulty-hard',
                        }
                    },
                    {
                        tag: 'input',
                        cls: ['block-options__input'],
                        attrs: {
                            type: 'radio',
                            id: 'difficulty-hard',
                            name: 'difficulty',
                            value: 'hard'
                        }
                    },
                ]
            },
            {
                tag: 'button',
                cls: ['form__button', 'button'],
                content: 'Старт'
            }
        ]
    }
}

