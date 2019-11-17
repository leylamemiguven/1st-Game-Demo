var config = {
    type: Phaser.AUTO, // Type property is used to tell phaser what type of rendering format we want to use in the game (CANVAS, WEBGL or AUTO)
    width: 800, //setting size of the canvas element getting created
    height: 600,
    scene:[
        BootScene,
        TitleScene,
        GameScene,
        UiScene,
        
    ],
    physics:{
        default: 'arcade',
        arcade: {
            debug: false, //when game objects are being rendered in the game they will have outlines, it is helpful when you are testing 
            gravity: {
                y:0 //5 //setting the gravity
            }
        }
    }

};

var game = new Phaser.Game(config);
