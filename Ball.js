class Ball{
    constructor(x, y, width, height,angle) {
        var options = {
            'frictionAir':0.005,
            'density':1
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIANS);
        strokeWeight(4);
        stroke("orange");
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}