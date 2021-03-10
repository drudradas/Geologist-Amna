class Plane {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, 1800, 20, options);
        this.width = 1800;
        this.height = 20;
        
        World.add(world, this.body);
    }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("brown");
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}   