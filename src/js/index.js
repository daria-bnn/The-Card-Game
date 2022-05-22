import '../styles/style.scss';

import { initGameState } from './state/init-game-state';
import { initGameLevesState } from './state/init-game-leves-state';

initGameState();
initGameLevesState();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('render-start-page');
});
