import { HtmlEl } from '../types';

export function createTempleteCart(
    block?: HtmlEl | string | (HtmlEl | string)[]
): Text | DocumentFragment | HTMLElement {
    if (block === undefined) {
        return document.createTextNode('');
    }
    if (typeof block === 'string') {
        const text = document.createTextNode(block);
        return text;
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();

        block.forEach((element) => {
            fragment.appendChild(createTempleteCart(element));
        });
        return fragment;
    }

    const result = document.createElement(block.tag);

    if (block.cls) {
        const newArray: string[] = [];
        const classes = newArray.concat(block.cls);

        classes.forEach((cls) => {
            result.classList.add(cls);
        });
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs);

        keys.forEach((key) => {
            const keyOne = key as keyof typeof block.attrs;
            if (block.attrs) {
                const value = block.attrs[keyOne];

                result.setAttribute(key, value);
            }
        });
    }

    result.appendChild(createTempleteCart(block.content));

    return result;
}
