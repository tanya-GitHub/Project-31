class Man{

    constructor(x,y,radius){

        var options = {
            isStatic: true,
            restitution: 1.3,
            friction: 0.0,
            density: 0.5,
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        this.body = Bodies.circle(x,y,radius, options);
        World.add(world, this.body);
/*
        this.image = loadImage("walking_1.png");
        this.image2 = loadImage("walking_2.png");
        this.image3 = loadImage("walking_3.png");
        this.image4 = loadImage("walking_4.png");
        this.image5 = loadImage("walking_5.png");
        this.image6 = loadImage("walking_6.png");
        this.image7 = loadImage("walking_7.png");
        this.image8 = loadImage("walking_8.png");
*/
    }

    display(){

        var pos = this.body.position

        ellipseMode(CENTER);
        fill(0);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        
   /*     var rand2;
        rand2 = Math.round(random(1));
    
        if(frameCount % 100 === 0){
    
            switch(rand2){
                case 1: image(this.image, pos.x, pos.y, this.radius*2, this.radius);
                break;
    
                case 2: image(this.image2, pos.x, pos.y, this.radius*2, this.radius);
                break;
    
                case 3: image(this.image3, pos.x, pos.y, this.radius, this.radius);
                break;
    
                case 4: image(this.image4, pos.x, pos.y, this.radius, this.radius);
                break;
    
                case 5: image(this.image5, pos.x, pos.y, this.radius, this.radius);
                break;
    
                case 6: image(this.image6, pos.x, pos.y, this.radius, this.radius);
                break;
    
                case 7: image(this.image7, pos.x, pos.y, this.radius, this.radius);
                break;
    
                case 8: image(this.image8, pos.x, pos.y, this.radius, this.radius);
                break;
            }

            this.lifetime = 2500;
        }*/
    }


}



