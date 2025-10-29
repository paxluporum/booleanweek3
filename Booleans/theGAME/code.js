// Get the canvas and drawing context
let canvas = document.getElementById("gameCanvas");
let pencil = canvas.getContext("2d");

//grab zombie images
let zombieBack = document.getElementById("zombie_back");
let zombieFront = document.getElementById("zombie_front");
let zombieRight = document.getElementById("zombie_right");
let zombieLeft = document.getElementById("zombie_left");

//grab bush images
let bushBack = document.getElementById("bush_back");
let bushFront = document.getElementById("bush_front");
let bushRight = document.getElementById("bush_right");
let bushLeft = document.getElementById("bush_left");

//item image
let itemSprite = document.getElementById("coin");



// -----------------------------------------------
// Character objects
let zombie = {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    speed: 5,
    upKey: "w",
    downKey: "s",
    leftKey: "a",
    rightKey: "d",
    sprite: zombieBack,
    draw: function () {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
    move: function (keysPressed) {
        let moved = false;
        if (keysPressed[this.upKey]) {
            this.y -= this.speed;
            this.sprite = zombieBack;
            moved = true;
        }
        if (keysPressed[this.downKey]) {
            this.y += this.speed;
            this.sprite = zombieFront;
            moved = true;
        }
        if (keysPressed[this.leftKey]) {
            this.x -= this.speed;
            this.sprite = zombieLeft;
            moved = true;
        }
        if (keysPressed[this.rightKey]) {
            this.x += this.speed;
            this.sprite = zombieRight;
            moved = true;
        }
    }
};

let bush = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    speed: 5,
    upKey: "8",
    downKey: "2",
    leftKey: "4",
    rightKey: "6",
    sprite: bushBack,
    draw: function () {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
    move: function (bushkeypressed) {
        let moved = false;
        if (bushkeypressed[this.upKey]) {
            this.y -= this.speed;
            this.sprite = bushBack;
            moved = true;
        }
        if (bushkeypressed[this.downKey]) {
            this.y += this.speed;
            this.sprite = bushFront;
            moved = true;
        }
        if (bushkeypressed[this.leftKey]) {
            this.x -= this.speed;
            this.sprite = bushLeft;
            moved = true;
        }
        if (bushkeypressed[this.rightKey]) {
            this.x += this.speed;
            this.sprite = bushRight;
            moved = true;
        }
    }
};

let item = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    sprite: itemSprite,
    draw: function () {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
};

//Respawn item function
function respawnItem() {
    item.x = Math.random() * (canvas.width - item.width);
    item.y = Math.random() * (canvas.height - item.height);
}


// -----------------------------------------------
// Track pressed keys
let keysPressed = {};
window.addEventListener("keydown", function (e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function (e) {
    keysPressed[e.key] = false;
});

let bushkeypressed = {};  //I have no idea why this works, only that it does
window.addEventListener("keydown", function (e) {
    bushkeypressed[e.key] = true;
});
window.addEventListener("keyup", function (e) {
    bushkeypressed[e.key] = false;
});

// -----------------------------------------------
// Utility function to check distance
function getDistance(a, b) {
    let dx = (a.x + a.width / 2) - (b.x + b.width / 2);
    let dy = (a.y + a.height / 2) - (b.y + b.height / 2);
    return Math.sqrt(dx * dx + dy * dy);
}

// -----------------------------------------------
// Game loop
function gameLoop() {
    // Draw background
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Move characters
    zombie.move(keysPressed);
    bush.move(bushkeypressed);

    // Draw characters
    zombie.draw();
    bush.draw();

    // Draw item
    item.draw();

    // Use getDistance here to check to see how close the characters are!

    if (getDistance(zombie, item) < 40) {
        respawnItem(); // Respawn item when zombie touches
    }

    if (getDistance(bush, item) < 40) {
        respawnItem(); // Respawn item when bush touches
    }

}

setInterval(gameLoop, 50);