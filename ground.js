class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("GamingBackground.png");
        World.add(world,this.body);
    }
    
    display()
    {
    imageMode(CENTER);
    image(this.image,0,0,2500,2500);
    }
}