function Dot(){
  this.position = createVector(random(0,width),random(0,height));
  this.radius = 25;
  this.color = {
    r: random(0,255),
    g: 0,
    b: random(0,255),
    a: 100,
  };

  this.render = function(){
    noStroke();
    fill(this.color.r,this.color.g,this.color.b,this.color.a);
    ellipse(this.position.x,this.position.y,this.radius,this.radius);
  }
}
