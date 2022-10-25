import { HtmlEl } from '../types';

export function blockForm(): HtmlEl {
    return {
        tag: 'form',
        cls: ['reg-block__form', 'form'],
        attrs: {
            'data-form': true,
        },
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
                            'data-input': true,
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
                            'data-input': true,
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
                            'data-input': true,
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
                attrs: {
                    'data-button': true,
                },
            },
            {
                tag: 'div',
                cls: ['form__error', 'form__error_hidden'],
                content: 'Нужно выбрать уровень сложности',
                attrs: {
                    'data-form-error': true,
                },
            },
        ],
    };
}
