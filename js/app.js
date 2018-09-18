// Enemies our player must avoid
var Enemy = function(y) {
	this.x = -50;
	this.y = y;
	this.speed = Math.floor(Math.random() * 171) + 30;
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.speed * dt;	
	
	if(this.x > 520) {
		this.speed = Math.floor(Math.random() * 201) + 30;
		this.x += this.speed * dt;
		this.x = -50;
	}
	if(player.x < this.x + 50 && player.x + 50 > this.x && 
		player.y < this.y + 30 && player.y + 30 > this.y) {
		player.x = 205;
		player.y = 380;
		this.x = -50;
	}
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player of the game
var Player = function (x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.charboy = 'images/char-boy.png';
};

// Update the player's position, required method for game
Player.prototype.update = function(dt) {
	if(this.x < 0) {
		this.x = 5;
	}else if(this.x > 480){
		this.x = 405;
	}else if(this.y > 380) {
		this.y = 380;
	}else if(this.y < -15) {
		gameOver();
		this.y = 380;
	}
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.charboy), this.x, this.y);
};

// sets the arrow keys to move the player on the game canvas
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
var Gems = function(gems) {
	this.x = Math.floor(Math.random() * 495) + 20;
	
	this.y = -30;
	this.speed = 240;
	this.gems = gems;
};

Gems.prototype.update = function(dt) {
	
	this.y += this.speed *dt;
	if(this.y > 610) {
		this.y = -30;
		this.x = Math.floor(Math.random() * 350) + 30;
	}
	
};

Gems.prototype.render = function() {
	ctx.drawImage(Resources.get(this.gems), this.x, this.y, 60, 101);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy = new Enemy(220);
let enemy1 = new Enemy(140);
let enemy2 = new Enemy(60);
let allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2);

// Place the player object in a variable called player
let player = new Player(205, 380, 40);

//Place the gems objects in an array called allGems
let gemBlue = new Gems('images/Gem Blue.png');
let gemGreen = new Gems('images/Gem Green.png');
let gemOrange = new Gems('images/Gem Orange.png');
let allGems = [];
allGems.push(gemBlue, gemGreen, gemOrange);
	
	

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

function gameOver() {
let alertBox = document.getElementById('modal');
let playAgain = document.getElementById('playAgain');
let message = document.querySelector('.alertModal');		
	if(alertBox.classList == 'modal') {
		alertBox.style.display = 'block';
		}
		playAgain.addEventListener('click', function() {
			if(event.target == this) {
				alertBox.style.display = 'none';
			}
		});
		player.x = 205;
}