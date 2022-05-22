export function createTempleteCart(block) {
    if (block === undefined) {
        return document.createTextNode('');
    }

    if (typeof block === 'string' || typeof block === 'number') {
        return document.createTextNode(block);
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
        const classes = [].concat(block.cls);
        classes.forEach((cls) => {
            result.classList.add(cls);
        });
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs);
        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key]);
        });
    }

    result.appendChild(createTempleteCart(block.content));

    return result;
}
