import '../styles/style.scss';

import {
    createForm,
    createTimerForGame,
    createButton,
    createCards,
} from './blocks';

import { renderStartPage, renderGamePage } from './screens';

window.application = {
    blocks: {},
    screens: {},
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
};

window.levelsGame = {
    light: 3,
    medium: 6,
    hard: 9,
};

window.application.blocks['create-form'] = createForm;
window.application.blocks['create-timer-for-game'] = createTimerForGame;
window.application.blocks['create-button'] = createButton;
window.application.blocks['create-cards'] = createCards;

window.application.screens['render-start-page'] = renderStartPage;
window.application.screens['render-game-page'] = renderGamePage;

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('render-start-page');
});
