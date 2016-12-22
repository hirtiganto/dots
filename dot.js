function Dot() {
  this.position = createVector(random(0,width),random(0,height));
  this.velocity = createVector(random(0.5, 2.5),0);

  this.radius = 25;
  this.color = {
    r: random(0,255),
    g: 0,
    b: random(0,255),
    a: 100,
  };

  this.render_dot = function() {
    noStroke();
    fill(this.color.r,this.color.g,this.color.b,this.color.a);
    ellipse(this.position.x,this.position.y,this.radius,this.radius);
  }

  this.check_edge = function() {
    if (this.position.x >= windowWidth){
      this.position.x = 0;
    } else if (this.position.x <= 0) {
      this.position.x = windowWidth;
    } else if (this.position.y >= windowHeight) {
      this.position.y = 0;
    } else if (this.position.y <= 0) {
      this.position.y = windowHeight;
    }
  }

  this.move_dot = function() {
    this.position.add(this.velocity);
  }
}
