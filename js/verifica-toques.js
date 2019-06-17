
/* Verifica os toques da bolinha */

function toqueTelaRight() {
    return (xBola > (xTela - raio)) ? true : false;
}

function toqueTelaLeft() {
    return (xBola < raio) ? true : false;
}

function toqueRaqRightLado() {

    return (
        ((xBola + 0.5*raio) > xRaqRight) &&
        ((yBola - 0.5*raio) > (yRaqRight)) &&
        ((yBola + 0.5*raio) < (yRaqRight + heightRaq))
    ) ? true : false;
}

function toqueRaqLeftLado() {

    return (
        ((xBola - raio) < (xRaqLeft + widthRaq)) &&
        ((yBola - raio) > (yRaqLeft)) &&
        ((yBola + raio) < (yRaqLeft + heightRaq))
    ) ? true : false;
}

function toqueRaqRightBaseInf() {

    return (((xBola -  raio) > xRaqRight) &&
        ((xBola +  raio) < (xRaqRight + widthRaq)) &&
        ((yBola +  raio) > (yRaqRight + heightRaq)) &&
        ((yBola -  raio) < (yRaqRight + heightRaq))) ? true : false;
}

function toqueRaqLeftBaseInf(){

    return (((xBola -  raio) > xRaqLeft) &&
    (xBola < (xRaqLeft + widthRaq)) &&
    ((yBola +  raio) > (yRaqLeft + heightRaq )) &&
    ((yBola -  raio) < (yRaqLeft + heightRaq ))) ? true : false;
}

function toqueRaqRightBaseSup() {

    return (((xBola + raio) > xRaqRight) &&
        ((xBola - raio ) < (xRaqRight + widthRaq)) &&
        ((yBola + raio) > yRaqRight) &&
        ((yBola - raio) < yRaqRight)) ? true : false;
}

function toqueRaqLeftBaseSup() {

    return (((xBola -raio) > xRaqLeft) &&
        ((xBola +  raio) < (xRaqLeft + widthRaq)) &&
        ((yBola +  raio) > yRaqLeft) &&
        ((yBola -  raio) < yRaqLeft)) ? true : false;
}