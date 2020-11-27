class Block{
  constructor(x,y){
   var options = {
       isStatic:true,
       restitution: 0.3,
       friction: 0.5,
       density:1.2
     }
     this.x=x;
     this.y=y;
     this.w=20;
     this.h=100;
     this.image=loadImage("dustbingreen.png");
     //600, 720,660 -- x; 680,600,600--y
     this.left = Bodies.rectangle(this.x-60,this.y,20,100, options);
     this.right = Bodies.rectangle(this.x+60,this.y,20,100, options);
     this.bottom= Bodies.rectangle(this.x,this.y+80,100,20, options);
     World.add(world,this.left);
     World.add(world,this.right);
     World.add(world,this.bottom);
    
  }

  display(){
 
   push()
   translate(this.x,this.y)
   imageMode(CENTER);
   image(this.image,0,0,this.h,this.h+20)
   pop()
  }
}