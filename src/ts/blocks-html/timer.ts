import { HtmlEl } from '../types';

export function timer(): HtmlEl {
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
                content: [
                    {
                        tag: 'span',
                        cls: ['block-timer__value-minute'],
                        attrs: {
                            'data-timer-value-min': '',
                        },
                        content: '00',
                    },
                    '.',
                    {
                        tag: 'span',
                        cls: ['block-timer__value-sec'],
                        attrs: {
                            'data-timer-value-sec': '',
                        },
                        content: '00',
                    },
                ],
            },
        ],
    };
}
