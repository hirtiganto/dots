function Dot() {
  this.position = createVector(random(0,width),random(0,height));
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.wind = createVector(random(0.5, 2.5),0);

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
      this.position.y = random(0,height);
    } else if (this.position.x <= 0) {
      this.position.x = windowWidth;
      this.position.y = random(0,height);
    } else if (this.position.y >= windowHeight) {
      this.position.y = 0;
      this.position.x = random(0,height);
    } else if (this.position.y <= 0) {
      this.position.y = windowHeight;
      this.position.x = random(0,height);
    }
  }


  this.apply_force = function(force){
    this.acceleration.add(force);
  }


  this.apply_wind = function(){
    this.apply_force(this.wind);
  }


  this.move_dot = function() {
    this.velocity.limit(2.5)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }


  this.avoid_mouse = function() {
    var mouse = createVector(mouseX,mouseY);
    var dir = p5.Vector.sub(mouse, this.position);
    if (dir.mag() < 100){
      dir.normalize();
      dir.mult(-0.2);
      this.apply_force(dir);
    }
  }
}
