class Drops{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 4;

        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 0.1,
            density: 0.01
        }
        this.rain = Bodies.circle(x, y, 4, options);
        
        World.add(world, this.rain);

    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)})
        }
    }

    display(){

        // CENTER and RADIUS can work for ellipse mode
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);

    }
}
