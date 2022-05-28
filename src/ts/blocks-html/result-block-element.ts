export function blockResult(image, content: string) {
    return {
        tag: 'div',
        cls: ['result__info', 'info-result'],
        content: [
            {
                tag: 'div',
                cls: ['info-result__image'],
                content: {
                    tag: 'img',
                    attrs: {
                        src: image,
                        alt: 'smile',
                    },
                },
            },
            {
                tag: 'p',
                cls: ['info-result__message-result'],
                content: `Вы ${content}!`,
            },
        ],
    };
}
