//logic of count game.

class NumberedBox extends createjs.Container {
    constructor(number=0){
        super();
        var movieclip = new lib.NumberedBox();
        this.addChild(movieclip);
        
        //random position
        movieclip.x = Math.random() * 200;
        movieclip.y = Math.random() * 200;
    }
}


class Game {
    constructor() {
        console.log(`Welcome to the game. Version: ${this.version()}`);

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        window.debugStage = this.stage;

        createjs.Ticker.setFPS(60);

        //keep redrawing the stage.
        createjs.Ticker.on("tick", this.stage);
        
        //background
        this.stage.addChild(new lib.Background());

        //testing code
        this.stage.addChild(new NumberedBox(88));
    }
    version() {
        return '1.0.0';
    }
}

//start the game
var game = new Game();
