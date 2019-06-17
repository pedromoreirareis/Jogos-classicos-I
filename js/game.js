
/* Movimenta os elementos do jogo em um intervalo determinado */

function playGame() {

    soundTrilha.play();

    if (toqueTelaRight()) { //  Toque tela lado direito

        xDirecao = -geraAngulo();
        somaPontoLeft();
        soundPonto.play();
       

    } else if (toqueTelaLeft()) { // Toque tela lado esquerdo

        xDirecao = geraAngulo();
        somaPontoRight();
        soundPonto.play();

    } else if (toqueRaqRightLado()) { // Toque lado da raquete direita

        xDirecao = -geraAngulo();
        soundRaquetada.play();
        

    } else if (toqueRaqLeftLado()) { // Toque lado da raquete esquerda

        xDirecao = geraAngulo();
        soundRaquetada.play();

    } else if (toqueRaqRightBaseInf()) { // Toque base inferior direita

        xDirecao = -geraAngulo();
        yDirecao = (yDirecao > 0) ? -geraAngulo() : geraAngulo();
        soundRaquetada.play();

    } else if (toqueRaqRightBaseSup()) { // Toque base superior sireita

        xDirecao = -geraAngulo();
        yDirecao = (yDirecao > 0) ? -geraAngulo() : geraAngulo();
        soundRaquetada.play();

    }else if (toqueRaqLeftBaseInf()) { // Toque base inferior direita

        xDirecao = geraAngulo();
        yDirecao = (yDirecao > 0) ? -geraAngulo() : geraAngulo();
        soundRaquetada.play();

    }  else if (toqueRaqLeftBaseSup()) { // Toque base superior sireita

        xDirecao = geraAngulo();
        yDirecao = (yDirecao > 0) ? -geraAngulo() : geraAngulo();
        soundRaquetada.play();
    }

    if (yBola > yTela - raio) { // Toque na tela inferior

        yDirecao = -geraAngulo();

    } else if (yBola < raio) { // Toque na tela superior

        yDirecao = geraAngulo();
    }
    
    desenhaTela();
    
    xBola += xDirecao;
    yBola += yDirecao;
}