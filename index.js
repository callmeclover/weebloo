/*let test;
let gui = createGui('Settings');
gui.addGlobals(test)*/

function contains(arr, value) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === value) return true;
  }
  return false;
}

let sprite;

let jumpPower;
let agility = 2;
let maxSpeed = 10;
let jumps = 2,
  maxJumps = 2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  background(27);

  sprite = new Sprite(0, 250, 30, 30);
  sprite.rotationLock = true;
  sprite.bounciness = 0.15;
  sprite.friction = 1.25;
  sprite.color = "rgb(178, 23, 103)";

  textFont("Orbit");

  createLevel();

  world.gravity.y = 10;
  jumpPower = world.gravity.y * 0.5;
  camera.zoom = 0.8;
}

function draw() {
  background(27);
  fill("rgba(255,255,255,0.7)");
  textSize(16);
  textAlign(LEFT);
  text(`fps: ${int(getFrameRate())}`, 15, 25);
  text(`xvel: ${Math.round(float(sprite.vel.x) * 10) / 10}`, 15, 41);
  text(`yvel: ${Math.round(float(sprite.vel.y) * 10) / 10}`, 15, 56);

  if (sprite.collide(window.floors)) {
    jumps = maxJumps;
  }

  if (theKey == "z" && sprite.collide(window.walls)) {
    jumps = maxJumps;
    theKey = "";
  }

  if (
    contains(keysHeld, "ArrowRight") ||
    (contains(keysHeld, "d") &&
      !contains(keysHeld, "ArrowLeft") &&
      !contains(keysHeld, "a"))
  ) {
    sprite.vel.x = sprite.vel.x + agility;
    if (sprite.vel.x > maxSpeed) {
      sprite.vel.x = maxSpeed;
    }
  } else if (
    contains(keysHeld, "ArrowLeft") ||
    (contains(keysHeld, "a") &&
      !contains(keysHeld, "ArrowRight") &&
      !contains(keysHeld, "d"))
  ) {
    sprite.vel.x = sprite.vel.x - agility;
    if (sprite.vel.x < -maxSpeed) {
      sprite.vel.x = -maxSpeed;
    }
  }

  camera.x = sprite.x;
  camera.y = sprite.y;

  if (sprite.y > 1500) {
    sprite = new Sprite(0, 250, 30, 30);
    sprite.rotationLock = true;
    sprite.bounciness = 0.15;
    sprite.friction = 1.25;
    sprite.color = "rgb(178, 23, 103)";
  }

  camera.on();

  textAlign(CENTER);
  fill(255);
  textSize(24);
  text("Welcome to Insurrection!", 0, 200);
  textSize(16);
  text("Use ⮜ and ⮞ to move.", 0, 232);

  textSize(16);
  text("Use ⮝ to jump.", 550, 402);
  textSize(12);
  text("(you can double jump, too.)", 550, 418);

  textSize(16);
  text("Some platforms are bouncy.", 900, 500);
  text("But we need more height!", 1100, 0);
  textSize(14);
  text("Press ⮟ to ground-pound.", 1100, 20);

  textSize(16);
  text("Nice job!", 1500, 0);
  textSize(14);
  text("Just a few last things...", 1500, 20);

  textSize(16);
  text("Don't worry!", 1700, 700);
  textSize(12);
  text("(this is scripted, after all.)", 1700, 720);
  textSize(16);
  text("You'll see an enemy soon!", 2100, 700);
  text("It can't do anything now, though.", 2100, 720);
  text("Ground-pound him!", 2100, 740);

  camera.off();
}

function keyPressed() {
  if (theKey === "ArrowDown" || theKey === "s") {
    sprite.vel.y = sprite.vel.y + jumpPower;
  } else if (theKey === "ArrowUp" || theKey === "w") {
    if (jumps > 0) {
      sprite.vel.y = sprite.vel.y - jumpPower;
      jumps = jumps - 1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
