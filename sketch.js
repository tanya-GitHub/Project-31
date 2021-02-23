const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 200;
var th1, th2, th3, th4;
var w1, w2, w3, w4, w5, w6, w7, w8;
var man;

function preload(){
    th1 = loadImage("1.png");
    th2 = loadImage("2.png");
    th3 = loadImage("3.png");
    th4 = loadImage("4.png");

    w1 = loadImage("walking_1.png");
    w2 = loadImage("walking_2.png");
    w3 = loadImage("walking_3.png");
    w4 = loadImage("walking_4.png");
    w5 = loadImage("walking_5.png");
    w6 = loadImage("walking_6.png");
    w7 = loadImage("walking_7.png");
    w8 = loadImage("walking_8.png");

    
}

function setup(){
    var canvas = createCanvas(450,750);
    engine = Engine.create();
    world = engine.world;

    man = new Man(240, 460, 100);
    World.add(world, man);

    //drops = new Drops(random(0,400), random(0,400));
    //World.add(world, drops);

    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(-600, 300)));
    }
    
}

function draw(){
    Engine.update(engine);
    background(0);

   // drops.display();

   for(i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
   }

   var rand;
   rand = Math.round(random(1, 4));

   if(frameCount % 80 === 0){

    var thunder = createSprite(random(0, 400), 100, 50, 50);
    thunder.scale = 0.7;
   switch(rand){
       case 1: thunder.addImage(th1);
       break;

       case 2: thunder.addImage(th2);
       break;

       case 3: thunder.addImage(th3);
       break;
       
       case 4: thunder.addImage(th4);
       break;

   }
   thunder.lifetime = 80;
}

    var rand2;
    rand2 = Math.round(random(1, 8));

    if(frameCount % 20 === 0){

        var manImg = createSprite(225, 550, 10, 10);
        manImg.scale = 0.6;

        switch(rand){

            case 1: manImg.addImage(w1);
            break;

            case 2: manImg.addImage(w2);
            break;

            case 3: manImg.addImage(w3);
            break;

            case 4: manImg.addImage(w4);
            break;

            case 5: manImg.addImage(w5);
            break;

            case 6: manImg.addImage(w6);
            break;

            case 7: manImg.addImage(w7);
            break;

            case 8: manImg.addImage(w8);
            break;
        }

        manImg.lifetime = 20;
    }

    man.display();


   drawSprites();
}   

