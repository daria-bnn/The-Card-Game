const ImgWin = require('/src/img/win.png');
const ImgLoss = require('/src/img/loss.png');

import { createTempleteCart } from '../../template-engine/create-template-card';
import { blockResult } from '../../blocks-html/result-block-element';

export function createBlockLoss(container: HTMLDivElement) {
    container.appendChild(
        createTempleteCart(blockResult(ImgLoss, 'проиграли'))
    );
}

export function createBlockWin(container: HTMLDivElement) {
    container.appendChild(createTempleteCart(blockResult(ImgWin, 'победили')));
}
