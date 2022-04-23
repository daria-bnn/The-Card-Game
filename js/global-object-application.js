window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        this.screens[screenName]()
    },
    renderBlock: function (blockName, container) {
        window.application.blocks[blockName](container)
    },
};

window.levelsGame = {
    light: '6',
    medium: '12',
    hard: '18',
};