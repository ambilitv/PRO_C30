class Box extends BaseClass {
    constructor(x, y, width, height){
      
      super(x,y,width,height);
      this.Visibility =255;
    }
    display(a,b,c){ 
      fill(rgb(a,b,c))
      if(this.body.speed<10) {
       
       push();
        super.display()
        pop();
    }else{
    
      World.remove(world,this.body)
      push()
      
      this.Visibility = this.Visibility-10
      tint(255,this.Visibility);
      console.log(this.Visibility)
      pop();
    }

    }
  
}