let xbola = 200;
let ybola = 200;
let diametro = 20;
let raio = diametro/2;
let xvb = 6;
let yvb = 6;

let xr = 5;
let yr =150
let lr = 7;
let ar = 80;

let xri = 488;
let yri = 150;
let colidiu = false;

let imagem;
let ponto;
let raquete;
let fundo;
let meuspontos = 0;
let pontosdooponente = 0;

function setup() {
  createCanvas(500, 400);
  imagem =  loadImage('gay.jpg')
}

function draw() {
  image(imagem, 0, 0, 500, 400)
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraqueteinimigo();
  mexeraquete();
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  
}

function mostrabola(){
  circle(xbola, ybola, diametro);
}

 function mostraraquete(x, y){
     rect(x,y,lr,ar);
   
}

function mexebola(){
  xbola += xvb;
  ybola += yvb;
}

function quicabola(){
  
  if (xbola + raio > width || xbola - raio < 0){
    xvb *= -1
    
  }
  
     if (ybola + raio > height || ybola - raio < 0){
    yvb *= -1
    
  }
  
}
 function mexeraquete(){
       if (keyIsDown(87))
        yr -=10;
       
       if(keyIsDown(83))
         yr += 10;
  }
{
  function mexeraqueteinimigo(){
    if (keyIsDown(UP_ARROW))
      yri -= 10;
    
    if (keyIsDown(DOWN_ARROW))
      yri += 10;
  }  
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xbola,ybola,raio);
    
    if(colidiu){
      xvb *= -1;
    }
}
function pontos(){
  if (xbola > 490){
    meuspontos += 1
}
  if (xbola < 10){
    pontosdooponente += 1
  }
}

function placar(){
  fill("pink");
  rect(150,10,40,20);
  rect(315,10,40,20);
  fill("white");
  stroke ("black");
  textAlign(CENTER);
  textSize(20);
  text(meuspontos, 0, 10, 340)
  text(pontosdooponente, 0, 10, 670)
  
}
