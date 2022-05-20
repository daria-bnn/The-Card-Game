import '../styles/style.scss';

import { initGameState } from './init-game-state';
import { levelsGame } from './info-about-levels-game';

initGameState();
levelsGame();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('render-start-page');
});
