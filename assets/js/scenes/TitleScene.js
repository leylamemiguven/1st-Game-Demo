class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }


    create() {
        //create title text 
        this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, "ASTRAY", { fontSize: '64px', fill: '#fff' });
        //sets title in the middle of the screen 
        this.titleText.setOrigin(0.5);

        //create play game button 
        this.startGameButton = new UiButton(this,this.scale.width / 2,
             this.scale.height * 0.65, 'button1', 'button2', 'Start',
              this.startScene.bind(this, 'Game')); //we are binding two scenes together

    }
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
