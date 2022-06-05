import ImgWin from '/src/img/win.png';
import ImgLoss from '/src/img/loss.png';

import { createTempleteCart } from '../../template-engine/create-template-card';
import { blockResult } from '../../blocks-html/result-block-element';

export function createLossBlock(container: HTMLDivElement) {
    container.appendChild(
        createTempleteCart(blockResult(ImgLoss, 'проиграли'))
    );
}

export function createBlockWin(container: HTMLDivElement) {
    container.appendChild(createTempleteCart(blockResult(ImgWin, 'победили')));
}
