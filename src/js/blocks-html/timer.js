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
                content: [
                    {
                        tag: 'span',
                        cls: ['block-timer__value-minute'],
                        content: '00',
                    },
                    '.',
                    {
                        tag: 'span',
                        cls: ['block-timer__value-sec'],
                        content: '00',
                    },
                ],
            },
        ],
    };
}

export { timer };
