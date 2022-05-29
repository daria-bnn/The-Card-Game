type CaptionLevel = {
    cardsPairs: number;
    attempt: number;
};

type Blocks = {
    ['create-form']: (container: HTMLDivElement) => void;
    ['create-timer-for-game']: (container: HTMLDivElement) => void;
    ['create-button']: (container: HTMLDivElement) => void;
    ['create-cards']: (container: HTMLDivElement) => void;
    ['create-attemts']: (container: HTMLDivElement) => void;
    ['create-block-win']: (container: HTMLDivElement) => void;
    ['create-block-loss']: (container: HTMLDivElement) => void;
    ['create-block-show-time']: (container: HTMLDivElement) => void;
    ['create-button-again']: (container: HTMLDivElement) => void;
};

type Screens = {
    ['render-start-page']: () => void;
    ['render-game-page']: () => void;
    ['render-win-page']: () => void;
    ['render-loss-page']: () => void;
};

type App = {
    blocks: Blocks;
    screens: Screens;
    renderScreen: (screenName: string) => void;
    renderBlock: (blockName: string, container: HTMLElement) => void;
    timers: number[];
};

declare global {
    interface Window {
        application: App;
        levelsGame: {
            light: CaptionLevel;
            medium: CaptionLevel;
            hard: CaptionLevel;
        };
        numberOfCards: number;
        attempt: number;
    }
}

export type CardSuit = {
    image: string;
    color: string;
};

export type Card = {
    cardValue?: string;
    cardImage?: string;
    cardName?: string;
};

type Attribute = {
    type?: string;
    id?: string;
    name?: string;
    value?: string;
    for?: string;
    'data-value-card'?: string;
    'data-show-card'?: boolean;
    src?: string;
    alt?: string;
};

export type HtmlEl = {
    tag: string;
    cls?: string[];
    attrs?: Attribute;
    content?: string | HtmlEl | (HtmlEl | string)[];
};

export type Nullable<T> = T | null;
