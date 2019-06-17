var tela = document.querySelector(".canvas");
var ctx = tela.getContext('2d');
var xTela = 600;
var yTela = 400;

var xBola = xTela / 2;
var yBola = yTela / 2; 
var raio = 10; 

var xDirecao = geraAnguloDirecao();
var yDirecao = geraAnguloDirecao();

var velocidade = 2;
var velocidadeRaq = 50; 

var widthRaq = 10; 
var heightRaq = 90; 
var distanciaRaqTela = tela.offsetLeft; 

var yRaqLeft = (yTela - heightRaq) / 2;
var yRaqRight = (yTela - heightRaq) / 2;

var xRaqLeft = distanciaRaqTela;                
var xRaqRight = xTela - (widthRaq + distanciaRaqTela);

var pontosLeft = 0; 
var pontosRight = 0;      
var pontosY = 40; 
var pontosXL = xTela / 4;    
var pontosXR = xTela * (3 / 4); 

desenhaTela();
desenhaBolaRaquetes();
desenhaPontos();

setInterval(playGame, velocidade);