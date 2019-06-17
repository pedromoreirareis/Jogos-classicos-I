
/* Modifica direcao e/ou sentido da bolinha*/

function geraAngulo() {
    
    let nRandom = 0;
    while (nRandom < 1) { nRandom = Math.random() * 2;}
    return nRandom;

}

function geraAnguloDirecao() {

    
    
    let sinal = (Math.floor(Math.random() * 10000) % 2 == 0) ? -1 : 1;
    return sinal * geraAngulo();
}