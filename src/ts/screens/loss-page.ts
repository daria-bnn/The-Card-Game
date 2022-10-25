import { Nullable } from '../types';

export function renderLossPage(): void {
    const wrapper: Nullable<HTMLElement> =
        document.getElementById('block-game');

    const fixedBlock: HTMLDivElement = document.createElement('div');
    fixedBlock.classList.add('block-game__result', 'result');

    const blockBackground: HTMLDivElement = document.createElement('div');
    blockBackground.classList.add('result__background');

    window.application.renderBlock('create-block-loss', blockBackground);
    window.application.renderBlock('create-block-show-time', blockBackground);
    window.application.renderBlock('create-button-again', blockBackground);

    fixedBlock?.appendChild(blockBackground);
    wrapper?.appendChild(fixedBlock);
}
