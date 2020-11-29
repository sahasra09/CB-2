class Bin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'density':1.2,
          'restitution':0.5,
          'friction':0.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.image=loadImage("Dust bin.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(this.image,0, 0, this.width, this.height);
      fill("white");
  
      pop();
    }
  };
  