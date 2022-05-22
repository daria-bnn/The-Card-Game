import {
    createForm,
    createTimerForGame,
    createButton,
    createCards,
    createAttempts,
    createBlockWin,
    createBlockLoss,
    createBlockresultTime,
    createButtonAgain,
} from '../blocks';

import {
    renderStartPage,
    renderGamePage,
    renderWinPage,
    renderLossPage,
} from '../screens';

export function initGameState() {
    return (window.application = {
        blocks: {
            ['create-form']: createForm,
            ['create-timer-for-game']: createTimerForGame,
            ['create-button']: createButton,
            ['create-cards']: createCards,
            ['create-attemts']: createAttempts,
            ['create-block-win']: createBlockWin,
            ['create-block-loss']: createBlockLoss,
            ['create-block-show-time']: createBlockresultTime,
            ['create-button-again']: createButtonAgain,
        },
        screens: {
            ['render-start-page']: renderStartPage,
            ['render-game-page']: renderGamePage,
            ['render-win-page']: renderWinPage,
            ['render-loss-page']: renderLossPage,
        },
        renderScreen: function (screenName) {
            window.application.timers.forEach((time) => {
                clearInterval(time);
            });

            this.screens[screenName]();
        },
        renderBlock: function (blockName, container) {
            window.application.blocks[blockName](container);
        },
        timers: [],
    });
}
