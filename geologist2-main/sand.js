class Sand {
    constructor(x, y) {
        var options = {
            restitution:0.3,
			friction:5,
			density:1
        }
        this.body = Bodies.circle(x, y, 2, options);
        this.radius = 10;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);

        strokeWeight(0.5);
        stroke("white");
        fill("yellow");
        ellipse(0, 0, this.radius*2);
        pop();
    }
}