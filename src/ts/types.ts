type CaptionLevel = {
    cardsPairs: number;
    attempt: number;
};

type Blocks = {
    ['create-form']: any;
    ['create-timer-for-game']: any;
    ['create-button']: any;
    ['create-cards']: any;
    ['create-attemts']: any;
    ['create-block-win']: any;
    ['create-block-loss']: any;
    ['create-block-show-time']: any;
    ['create-button-again']: any;
};

type Screens = {
    ['render-start-page']: any;
    ['render-game-page']: any;
    ['render-win-page']: any;
    ['render-loss-page']: any;
};

type App = {
    blocks: Blocks;
    screens: Screens;
    renderScreen: any;
    renderBlock: any;
    timers: any[];
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
    image: any;
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
    src?: any;
    alt?: string;
};

export type HtmlEl = {
    tag?: string;
    cls?: string[];
    attrs?: Attribute;
    content?: HtmlEl | HtmlEl[] | string;
};

export type Nullable<T> = T | null;
