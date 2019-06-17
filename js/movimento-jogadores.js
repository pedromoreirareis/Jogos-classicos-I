
/* Controla o movimento dos jogadores */ 

document.addEventListener('keydown', function (event) {

    if (yRaqLeft > 0) {

        if (event.key == "ArrowUp") {
            yRaqLeft -= velocidadeRaq;
        }
    }

    if (yRaqLeft < (yTela - heightRaq)) {

        if (event.key == "ArrowDown") {
            yRaqLeft += velocidadeRaq;
        }
    }
});

function moverRaqueteOponente() {

    if ( yBola - heightRaq/2 > (yRaqRight )) {

        yRaqRight = yBola + velocidadeRaq/2;

    } else {

        yRaqRight = yBola - velocidadeRaq/2;
    }

}
