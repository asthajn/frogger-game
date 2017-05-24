// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.enemyInitLoc = {
        x: 1,
        y: getRandomEnemyY()
    }
    this.x = this.enemyInitLoc.x;
    this.y = this.enemyInitLoc.y;
    this.speed = 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x > 450){
        this.x = 1
    }else
        this.x = this.x + this.speed*dt
    //this.y = this.y+this.y*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

getRandomEnemyY = function(){
    return (Math.floor(Math.random()*3)) * 82 + 72 ;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    console.log("player getting defined");
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = setPlayerRandomX();
    this.y = setPlayerRandomY();
};

// Update the Player's position, required method for game
Player.prototype.update = function() {
    this.x = this.x;
};

Enemy.prototype.reset = function() {
    this.y = getRandomEnemyY();
}

setPlayerRandomX = function(){
    return (Math.floor(Math.random()*5)) * 100;
};

setPlayerRandomY = function(){
    return (Math.floor(Math.random()*1)) * 72 + 318 ;
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed){
    console.log("keyPressed: ", keyPressed);
    switch(keyPressed){
        case 'left':
            if(this.x == 0)
                this.x = 400;
            else
                this.x = this.x-100;
            break;
        case 'right':
            if(this.x == 400)
                this.x = 0;
            else
                this.x = this.x+100;
            break;
        case 'up':
        console.log("up: ", this.y)
            if(this.y < 74)
                this.y = setPlayerRandomY();
            else
                this.y = this.y-82;
            break;
        case 'down':
            if(this.y > 350)
                this.y = 400;
            else
                this.y = this.y+82;
            break;
    }
};

Player.prototype.reset = function() {
    this.x = setPlayerRandomX();
    this.y = setPlayerRandomY();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var i=0;
var allEnemies = [];
for(; i<3; i++)
    allEnemies.push(new Enemy());
player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
