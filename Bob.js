class Bob{
  constructor(x,y,radius){
    var options ={
      isStatic:false,
      density: 3.0,
      restitution:1.3
    }
    this.body = Bodies.circle(x,y,30,options);
    this.radius = radius
    World.add(world,this.body)
  }
display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  ellipseMode(RADIUS)
  ellipse(0,0,this.radius,35);
  pop();
}
}