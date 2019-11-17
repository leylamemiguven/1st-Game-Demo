class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    //preloading scenes where we load the assets, title scene with play game and options
    preload(){
        //loading images
        this.loadImages();
        //load spriteheets
        this.loadSpriteSheets();
        //load audio
        this.loadAudio();
    }
    
    loadImages(){
        //loading the buttons
        this.load.image('button1', 'assets/images/ui/blue_button01.png');
        this.load.image('button2', 'assets/images/ui/blue_button02.png');
    }
    loadSpriteSheets(){
        //image takes in 2 things: key and filepath
        this.load.spritesheet('items', 'assets/images/items.png' ,{frameWidth: 32, frameHeight: 32});
        //creates character from the assets
        this.load.spritesheet('characters', 'assets/images/characters.png' ,{frameWidth: 32, frameHeight: 32});
    }
    loadAudio(){
         //load audio
         this.load.audio('goldSound', 'assets/audio/Pickup.wav');

    }

    create(){
        console.log('starting game');
        //transitions the boot scene to game screen
        this.scene.start('Title');

    }
}
