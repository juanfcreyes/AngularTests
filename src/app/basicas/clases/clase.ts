export class Jugador {
    puntosVida: number;
    constructor() {
        this.puntosVida = 100;
    }

    recibeDanio(dano: number) {
        if (dano >= this.puntosVida) {
            this.puntosVida = 0;
        } else {
            this.puntosVida -= dano;
        }
        return this.puntosVida;
    }
}