import {
    createForm,
    createTimerForGame,
    createButton,
    createCards,
} from '../blocks';

import { renderStartPage, renderGamePage } from '../screens';

export function initGameState() {
    return (window.application = {
        blocks: {
            ['create-form']: createForm,
            ['create-timer-for-game']: createTimerForGame,
            ['create-button']: createButton,
            ['create-cards']: createCards,
        },
        screens: {
            ['render-start-page']: renderStartPage,
            ['render-game-page']: renderGamePage,
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
