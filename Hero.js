class Hero{
    constructor(x, y, width, height, angle) {
 //this.image = loadImage("images/Superhero-01.png");
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png")
        this.image = loadImage("images/Superhero-02.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(4); 
        //stroke("green"); 
        //fill(255);
       imageMode(CENTER) 
       // rect(0, 0, this.width, this.height);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}