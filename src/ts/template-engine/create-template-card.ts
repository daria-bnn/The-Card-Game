import { HtmlEl } from '../types';

export function createTempleteCart(
    block: HtmlEl | HtmlEl[] | string | (HtmlEl | string)[] | undefined
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
            if (block.attrs) {
                result.setAttribute(key, block.attrs[key]);
            }
        });
    }

    result.appendChild(createTempleteCart(block.content));

    return result;
}
