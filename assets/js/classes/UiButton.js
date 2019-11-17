class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallBack) {
        super(scene, x, y);
        this.scene = scene; //the scene this container will be added to 
        this.x = x; // the x position of the container
        this.y = y; // the y position of the container
        this.key = key; // the background image of our button 
        this.hoverKey = hoverKey; //the image that will be displayed when the player hovers over the button
        this.text = text; // the text that will be displayed on the button
        this.targetCallBack = targetCallBack; // the callback function that will be called when the player clicks the button

        this.createButton();
        //add this container to our phaser scene
        this.scene.add.existing(this);
    }
    createButton() {
        //create play game button 
        this.button = this.scene.add.image(0, 0, 'button1');
        //make button interactive
        this.button.setInteractive();
        //scale the button
        this.button.setScale(1.4);

        //add text to start game button 
        this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '26px', fill: '#fff' });
        //makes the text appear on the button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        //add to game objects to our container 
        this.add(this.button);
        this.add(this.buttonText);

        //listen for events 
        this.button.on('pointerdown', () => {
            this.targetCallBack();
            console.log('pointer down');
        })

        this.button.on('pointerover', () => {
            //adds hovering effect when mouse is on the button
            this.button.setTexture(this.hoverKey);
            console.log('pointer over');
        })

        this.button.on('pointerout', () => {
            //adds hovering effect when mouse is not on the button
            this.button.setTexture(this.key);
            console.log('pointer out');
        })
    }
}
