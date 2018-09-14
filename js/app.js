// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	this.x = x;
	this.y = y;
	
	this.sprite = 'images/enemy-bug.png';
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
let randomSpeed = function() {
		let max = 200;
		let min = 10;
		let speed = Math.floor(Math.random() * (max - min + 1)) + min;
		return speed * dt; 
	}
	this.x += randomSpeed();	
	
	if(this.x > 520) {
		this.x = -50;
		//this.x += randomSpeed();
	}
	
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	//this.speedY = 0;
	this.charboy = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
	if(this.x < 0) {
		this.x = 5;
	}else if(this.x > 480){
		this.x = 405;
	}else if(this.y > 380) {
		this.y = 380;
	}else if(this.y < -15) {
		this.y = 380;
	}
	
	
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.charboy), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
	switch(keyPress) {
		case 'left':
			this.x -= this.speed + 60;
			break;
		case 'up':
			this.y -= this.speed + 45;
			break;
		case 'right':
			this.x += this.speed + 60;
			break;
		case 'down':
			this.y += this.speed + 45;
			break;
	}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy = new Enemy(-50, 220);
let enemy1 = new Enemy(-50, 140);
let enemy2 = new Enemy(-50, 60);
let allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2);

let player = new Player(205, 380, 40);


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
