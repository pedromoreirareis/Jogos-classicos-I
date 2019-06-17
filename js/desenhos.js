
/* Faz os desenhos dos elementos do jogo */

function desenhaTela() {
    limpaTela();
    desenhaPontos();
    desenhaFundoTela();
    desenhaBola();
    desenhaPontos();
    moverRaqueteOponente();
    desenhaBolaRaquetes();
}

function limpaTela() {
    ctx.clearRect(0, 0, xTela, yTela);
}

function desenhaFundoTela() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, xTela, yTela);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#E47833";
    ctx.strokeRect(0, 0, xTela, yTela);
}

function desenhaPontos() {
    ctx.fillStyle = "#E47833";
    ctx.fillRect(pontosXL - 25,pontosY-30,60,35);
    ctx.fillRect(pontosXR - 25,pontosY-30,60,35);
    ctx.strokeStyle = "white";
    ctx.strokeRect(pontosXL - 25,pontosY-30,60,35);
    ctx.strokeRect(pontosXR - 25,pontosY-30,60,35);
    ctx.font = '40px Consolas';
    ctx .textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(pontosLeft, pontosXL, pontosY);
    ctx .textAlign = "center";
    ctx.fillText(pontosRight, pontosXR, pontosY);   
}

function desenhaBola() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(xBola, yBola, raio, 0, 2 * Math.PI);
    ctx.fill();
}

function desenhaBolaRaquetes() {
    desenhaBola();
    desenhaRaqueteEsquerda();
    desenhaRaqueteDireita();
}

function desenhaRaqueteEsquerda() {

    ctx.clearRect(xRaqLeft, yRaqLeft, widthRaq, heightRaq);
    ctx.fillStyle = "white";
    ctx.fillRect(xRaqLeft, yRaqLeft, widthRaq, heightRaq);
}

function desenhaRaqueteDireita() {

    ctx.clearRect(xRaqRight, yRaqRight, widthRaq, heightRaq);
    ctx.fillStyle = "white";
    ctx.fillRect(xRaqRight, yRaqRight, widthRaq, heightRaq);
}
