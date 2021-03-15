class Box{

    constructor(x, y, width, height) {
        var options = {
           

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     
       var angle = this.body.angle
       var position = this.body.position 
       push()
       translate(position.x,position.y)
      rotate(angle)
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop()
    
}
score(){
    if(this.visiblity<0 && this.visibility>-150){
        score++;
    }
}
}
