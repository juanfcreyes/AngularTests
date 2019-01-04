import { EventEmitter } from "@angular/core";

export class JugadorEE {

    puntosVida: number;
    puntosVidaCambia = new EventEmitter<number>();

    constructor() {
        this.puntosVida = 100;
    }

    recibeDanio(dano: number) {
        if (dano >= this.puntosVida) {
            this.puntosVida = 0;
        } else {
            this.puntosVida -= dano;
        }
        this.puntosVidaCambia.emit(this.puntosVida);
    }
}