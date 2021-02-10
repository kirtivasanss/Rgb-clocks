var hr, mn , sc;
var hrAngle,mnAngle,scAngle;
var a = 1,b,c,d=840, e=0;
var g=255;
var gameState=1;
function setup() {
  createCanvas(840,840);
  noStroke();
  
  
  

  angleMode(DEGREES);

  // createSprite(400, 400, 50, 50);
}

function draw() {
  background("black");  
  fill(0,g,255);
  ellipse(d,height/4,a,a);
  ellipse(e,height/1.5,a,a);
  
  
  // c.shapeColor = 150;
    d = d-1.5;
    e = e+1.5;

    if(d == 0 ){
      d = 840;
      e=0;
    
    }
    if(gameState == 1){
      g = g+1;
   }
   else if(gameState == 2){
     g = g-1;
   }
   if(g  > 255){
      gameState = 2;
   }
   else if(g == 0){
     gameState = 1;
   }

    if(gameState == 1){
       a = a+1;
    }
    else if(gameState == 2){
      a = a-1;
    }
    if(a > 255){
       gameState = 2;
    }
    else if(a == 0){
      gameState = 1;
    }
    hr = hour();
    mn = minute();
    sc = second();

   if(hr > 12){
     hr=hr%12;
   }
   //console.log(d);
   
  drawSprites();
  
  fill(255,a,0);
  textSize(35);
  text(hr+ ":"+mn+":"+sc,350,400);
}


