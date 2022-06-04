import { createForm } from '../blocks/create-form';
import { createTimerForGame } from '../blocks/blocks-for-game-page/create-timer';
import { createAttempts } from '../blocks/blocks-for-game-page/create-attempts';
import { createButton } from '../blocks/blocks-for-game-page/create-button';
import { createCards } from '../blocks/blocks-for-game-page/create-cards';
import {
    createBlockWin,
    createBlockLoss,
} from '../blocks/block-result-game/create-block-result';
import { createBlockresultTime } from '../blocks/block-result-game/create-block-result-time';
import { createButtonAgain } from '../blocks/block-result-game/create-button-again';

import { renderStartPage } from '../screens/start-page';
import { renderGamePage } from '../screens/game-page';
import { renderWinPage } from '../screens/win-page';
import { renderLossPage } from '../screens/loss-page';
import { App } from '../types';

export function initGameState(): App {
    return (window.application = {
        blocks: {
            'create-form': createForm,
            'create-timer-for-game': createTimerForGame,
            'create-button': createButton,
            'create-cards': createCards,
            'create-attemts': createAttempts,
            'create-block-win': createBlockWin,
            'create-block-loss': createBlockLoss,
            'create-block-show-time': createBlockresultTime,
            'create-button-again': createButtonAgain,
        },
        screens: {
            'render-start-page': renderStartPage,
            'render-game-page': renderGamePage,
            'render-win-page': renderWinPage,
            'render-loss-page': renderLossPage,
        },
        renderScreen: function (screenName) {
            window.application.timers.forEach((time) => {
                clearInterval(time);
            });

            window.application.screens[screenName]();
        },
        renderBlock: function (blockName, container): void {
            window.application.blocks[blockName](container);
        },
        timers: [],
    });
}
