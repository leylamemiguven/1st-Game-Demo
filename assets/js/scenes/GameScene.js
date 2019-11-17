class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('Ui');
        this.score = 0;
    }

    create() {
        this.createAudio();
        this.createPlayer();
        this.createChest();
        this.createWalls();
        this.createInput();
        this.createCollisions();
    }

    update() {
        this.player.update(this.cursors); // calling the class method directly so it updates
    }
    createAudio() {
        //Creating a variable for the gold sound
        this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });
        //goldPickupAudio.play(); // nothing will happen to the sound if we dont call this

    }
    createPlayer() {
        //Adding and scaling of the player image
        this.player = new Player(this, 32, 32, 'characters', 0); //adds characters on screen


    }
    createChest() {
        //create a chest group
        this.chests = this.physics.add.group();
        //create chest positions array
        this.chestPositions = [[100, 100], [200, 200], [300, 300], [400, 400], [500, 500]];
        //specify the number of chest we can have 
        this.maxNumberOfChests = 3;
        //spawn a chest
        for (let i = 0; i < this.maxNumberOfChests; i += 1) {
            this.spawnChest();
        }
    }
    spawnChest() {
        const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];

        let chest = this.chests.getFirstDead();
        // !chest == if there is not a chest
        if (!chest) {
            const chest = new Chest(this, location[0], location[1], 'items', 0);
            this.chests.add(chest)
        } else {
            chest.setPosition(location[0], location[1]);
            chest.makeActive();

        }
    }
    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1');
        this.wall.setImmovable(); //makes the wall object immovable 

    }
    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();

    }
    createCollisions() {
        this.physics.add.collider(this.player, this.wall); //makes the player collide with the wall
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this); //editing the overlap function so that 
        //when the player overlaps the object the object dissapears(chest.destroy)

    }

    collectChest(player, chest) {
        //plays gold pickup sound
        this.goldPickupAudio.play();
        //update our score
        this.score += chest.coins;
        //updates score in the ui
        this.events.emit('updateScore', this.score);
        //make chestt game inactive
        chest.makeInactive();
        //destroys chest 
        chest.destroy();
        //spawn a new chest at a random location after the player has collected a chest 
        this.time.delayedCall(1000, this.spawnChest, [], this)

    }
}

