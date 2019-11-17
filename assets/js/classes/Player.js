class Player extends Phaser.Physics.Arcade.Image {
    //key of the asset 
    constructor(scene,x,y,key,frame) {
        super(scene,x,y,key,frame);
        this.scene = scene;
        this.velocity = 160; //the velocity when moving our player

        //enable physics
        this.scene.physics.world.enable(this);
        //set immovable if another object collides with our player.
        this.setImmovable(false);
        //scale our player
        this.setScale(2);
        ////prevents player to go out of worldbounds
        this.setCollideWorldBounds(true); 
        //add player to existing scene
        this.scene.add.existing(this);


    } 

    update(cursors) {
        this.body.setVelocity(0); 
        // because we are already in the player class, we don't need to reference this.player.
        //Instead we are referencing the body
        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity)
            //console.log ('left');

        } else if (cursors.right.isDown){
            this.body.setVelocityX(this.velocity)
            //console.log ('right');
        
        } else if (cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity)
            //console.log ('up');

        } else if (cursors.down.isDown){
            this.body.setVelocityY(this.velocity)
            //console.log ('down');
        
        }
    }
}