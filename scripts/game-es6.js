//logic of count game.
class Game {
    constructor() {
        console.log(`Welcome to the game. Version: ${this.version()}`);

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        createjs.Ticker.setFPS(60);

        //keep redrawing the stage.
        createjs.Ticker.on("tick", this.stage);
    }
    version() {
        return '1.0.0';
    }
}

//start the game
var game = new Game();
