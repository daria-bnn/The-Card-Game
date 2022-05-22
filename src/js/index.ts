import '../styles/style.scss';

import { initGameState } from './state/init-game-state';
import { initGameLevesState } from './state/init-game-leves-state';

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

initGameState();
initGameLevesState();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('render-start-page');
});
