
class Ground {

    constructor() {
        var options = {

            isStatic: true

        }

        this.ground = Bodies.rectangle(400,200,900,15,options);
        World.add(world, this.ground);
    }

    display() {
        strokeWeight(2);
        fill("yellow");
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,900,20);

    }
}