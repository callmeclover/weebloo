// Every level has this file to reduce size of index

function createLevel() {
  // Create groupings
  window.floors = new Group();
  window.walls = new Group();
  window.ceils = new Group();

  // Create floors
  new window.floors.Sprite(100, 500, 700, 20, "s");
  new window.floors.Sprite(640, 450, 400, 20, "s");

  // Create ceilings
  new window.ceils.Sprite(0, 0, 500, 20, "s");

  // Create walls
  new window.walls.Sprite(-250, 250, 20, 520, "s");
  new window.walls.Sprite(250, 195, 20, 410, "s");

  new window.walls.Sprite(450, 475, 20, 70, "s");

  // Create special objects (and set their properties)
  // new window.floors.Sprite(width * 0.25, height * 0.75, 100, 10, "s").bounciness = 1;
  // new window.floors.Sprite(width * 0.75, height * 0.75, 100, 10, "s").friction = 0;

  walls.color = `rgb(${chance.integer({min: 50, max: 180})}, ${chance.integer({min: 54, max: 64})}, ${chance.integer({min: 150, max: 160})})`
  ceils.color = `rgb(${chance.integer({min: 50, max: 180})}, ${chance.integer({min: 54, max: 64})}, ${chance.integer({min: 150, max: 160})})`
  floors.color = `rgb(${chance.integer({min: 50, max: 180})}, ${chance.integer({min: 54, max: 64})}, ${chance.integer({min: 150, max: 160})})`
}
