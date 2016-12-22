var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i <= 250; i++){
    dots.push(new Dot())
  }
}

function draw() {
  background(0);
  for (var i = 0; i < dots.length; i++){
    dots[i].render_dot();
    dots[i].move_dot();
    dots[i].check_edge();
  }
}
