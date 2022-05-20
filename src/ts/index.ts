import '../styles/style.scss';

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
} from './blocks';

import {
    renderStartPage,
    renderGamePage,
    renderWinPage,
    renderLossPage,
} from './screens';

type CaptionLevel = {
    cards: number;
    attempt: number;
};

declare global {
    interface Window {
        application: any;
        levelsGame: {
            light: CaptionLevel;
            medium: CaptionLevel;
            hard: CaptionLevel;
        };
        numberOfCards: number;
        attempt: number;
    }
}

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName): void {
        window.application.timers.forEach((time): void => {
            clearInterval(time);
        });

        this.screens[screenName]();
    },
    renderBlock: function (blockName, container: HTMLDivElement): void {
        window.application.blocks[blockName](container);
    },
    timers: [],
};

window.levelsGame = {
    light: {
        cards: 3,
        attempt: 2,
    },
    medium: {
        cards: 6,
        attempt: 3,
    },
    hard: {
        cards: 9,
        attempt: 6,
    },
};

window.application.blocks['create-form'] = createForm;
window.application.blocks['create-timer-for-game'] = createTimerForGame;
window.application.blocks['create-button'] = createButton;
window.application.blocks['create-cards'] = createCards;
window.application.blocks['create-attemts'] = createAttempts;
window.application.blocks['create-block-win'] = createBlockWin;
window.application.blocks['create-block-loss'] = createBlockLoss;
window.application.blocks['create-block-show-time'] = createBlockresultTime;
window.application.blocks['create-button-again'] = createButtonAgain;

window.application.screens['render-start-page'] = renderStartPage;
window.application.screens['render-game-page'] = renderGamePage;
window.application.screens['render-win-page'] = renderWinPage;
window.application.screens['render-loss-page'] = renderLossPage;

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('render-start-page');
});
