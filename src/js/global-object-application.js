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
