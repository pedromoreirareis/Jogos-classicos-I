
/* Soma os pontos */ 

function somaPontoLeft() {
    if ((xBola + raio) > (xTela)) {
        pontosLeft++;
    }
}

function somaPontoRight() {
    if ((xBola - raio) < 0) {
        pontosRight++;
    }
}