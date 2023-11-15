let sprite;

let floor, wallLeft, wallRight, ceiling;

let bouncyFloor, slipperyFloor;

let jumpPower;
let agility = 2.5;
let jumps = 2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);

  sprite = new Sprite(width / 2, height / 2, 30, 30);
  sprite.rotationLock = true;
  sprite.bounciness = 0.15;

  floor = new Sprite(width * 0.5, height, width, 10, "s");
  ceiling = new Sprite(width * 0.5, 0, width, 10, "s");
  wallLeft = new Sprite(0, height * 0.5, 10, height, "s");
  wallRight = new Sprite(width, height * 0.5, 10, height, "s");

  bouncyFloor = new Sprite(width * 0.25, height * 0.75, 100, 10, "s");
  bouncyFloor.bounciness = 1;
  slipperyFloor = new Sprite(width * 0.75, height * 0.75, 100, 10, "s");
  slipperyFloor.friction = 0;

  world.gravity.y = 10;
  jumpPower = world.gravity.y * 0.5;
}

function draw() {
  background(255);
  fill("rgba(0,0,0,0.7)");
  textSize(16);
  textAlign(LEFT);
  text(`fps: ${int(getFrameRate())}`, 10, 20);
  text(`xvel: ${Math.round(float(sprite.vel.x) * 10) / 10}`, 10, 36);
  text(`yvel: ${Math.round(float(sprite.vel.y) * 10) / 10}`, 10, 52);

  fill(0);
  textAlign(CENTER);
  text("bouncy", bouncyFloor.pos.x, height * 0.75 - 10);
  text("slippery", slipperyFloor.pos.x, height * 0.75 - 10);

  if (sprite.collide(floor)) {
    jumps = 2;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sprite.vel.x = sprite.vel.x - agility;
  } else if (keyCode === RIGHT_ARROW) {
    sprite.vel.x = sprite.vel.x + agility;
  } else if (keyCode === DOWN_ARROW) {
    sprite.vel.y = sprite.vel.y + jumpPower;
  } else if (keyCode === UP_ARROW) {
    if (jumps > 0) {
      sprite.vel.y = sprite.vel.y - jumpPower;
      jumps = jumps - 1;
    }
  }
}
