function contains(arr, value) {
  var i = arr.length;
  while (i--) {
      if (arr[i] === value) return true;
  }
  return false;
}

let sprite;

let floors;

let floor, wallLeft, wallRight, ceiling;

let bouncyFloor, slipperyFloor;

let jumpPower;
let agility = 2;
let maxSpeed = 10;
let jumps = 2,
    maxJumps = 2;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);

  floors = new Group()

  sprite = new Sprite(width / 2, height / 2, 30, 30);
  sprite.rotationLock = true;
  sprite.bounciness = 0.15;
  sprite.friction = 1.25;

  floor = new floors.Sprite(width * 0.5, height, width, 20, "s");
  ceiling = new Sprite(width * 0.5, 0, width, 20, "s");
  wallLeft = new Sprite(0, height * 0.5, 20, height, "s");
  wallRight = new Sprite(width, height * 0.5, 20, height, "s");

  bouncyFloor = new floors.Sprite(width * 0.25, height * 0.75, 100, 10, "s");
  bouncyFloor.bounciness = 1;
  slipperyFloor = new floors.Sprite(width * 0.75, height * 0.75, 100, 10, "s");
  slipperyFloor.friction = 0;

  world.gravity.y = 10;
  jumpPower = world.gravity.y * 0.5;

  textFont("Orbit")
}

function draw() {
  background(255);
  fill("rgba(0,0,0,0.7)");
  textSize(16);
  textAlign(LEFT);
  text(`fps: ${int(getFrameRate())}`, 15, 25);
  text(`xvel: ${Math.round(float(sprite.vel.x) * 10) / 10}`, 15, 41);
  text(`yvel: ${Math.round(float(sprite.vel.y) * 10) / 10}`, 15, 56);

  fill(0);
  textAlign(CENTER);
  text("bouncy", bouncyFloor.pos.x, height * 0.75 - 10);
  text("slippery", slipperyFloor.pos.x, height * 0.75 - 10);

  text("p5.js movement test", width*0.5, height * 0.25);

  if (sprite.collide(floors)) {
    jumps = maxJumps;
  }

  if (contains(keysHeld, "ArrowRight") && !(contains(keysHeld, "ArrowLeft"))) {
      sprite.vel.x = sprite.vel.x + agility;
      if (sprite.vel.x > maxSpeed) {
        sprite.vel.x = maxSpeed
      }
    } else if (contains(keysHeld, "ArrowLeft") && !(contains(keysHeld, "ArrowRight"))) {
      sprite.vel.x = sprite.vel.x - agility;
      if (sprite.vel.x < -maxSpeed) {
        sprite.vel.x = -maxSpeed
      }
    }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    sprite.vel.y = sprite.vel.y + jumpPower;
  } else if (keyCode === UP_ARROW) {
    if (jumps > 0) {
      sprite.vel.y = sprite.vel.y - jumpPower;
      jumps = jumps - 1;
    }
  }
}
