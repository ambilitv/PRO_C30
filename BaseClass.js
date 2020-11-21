class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.Visibility =255;
        World.add(world, this.body);
      }
      display(color){
        
        var angle = this.body.angle;
        //World.remove(world, this.body);
        //this.Visibility = this.Visibility-5
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill("red")
        
        //tint(255,this.visibility);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
}