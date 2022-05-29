import { HtmlEl } from '../types';

export function blockForm(): HtmlEl {
    return {
        tag: 'form',
        cls: ['reg-block__form', 'form'],
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
