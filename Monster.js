

class Monster{
    constructor(x, y, width, height) {
       // Monster.scale=0.5
        var options = {
           // isStatic: true
            'restitution':0.5,
            'friction':1.0,
            'density':0.04,
           
        }
       
        this.body = Bodies.rectangle(x, y, width, height, options);
       // Monster.scale=0.5
        this.width = width;
        this.height = height;
      
       this.image = loadImage("images/Monster-01.png");
       //this.image = loadImage("images/Monster-02.png");

       //Monster.scale=0.5
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(0); 
        //stroke("green"); 
        //fill(255);
        
        imageMode(CENTER) 
      //  rect(0, 0, this.width, this.height);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }