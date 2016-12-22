var dots = [];

function setup() {
  createCanvas(800,500);
  for (var i = 0; i <= 100; i++){
    dots.push(new Dot())
  }
}

function draw() {
  background(0);
  for (var i = 0; i <= dots.length; i++){
    dots[i].render();
  }
}
