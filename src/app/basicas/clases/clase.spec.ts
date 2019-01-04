import { Jugador } from "./clase";

describe('Pruebas de Clases', () => {

    const jugador = new Jugador();
    beforeEach( () => {
        jugador.puntosVida = 100;
    })
   
    it('Debe retorna 80 puntos de vida', () => {
        const respuesta = jugador.recibeDanio(20)
        expect(respuesta).toBe(80);
    }); 

    it('Debe retorna 50 puntos de vida', () => {
        const respuesta = jugador.recibeDanio(50)
        expect(respuesta).toBe(50);
    }); 

    it('Debe retorna 0 puntos de vida', () => {
        const respuesta = jugador.recibeDanio(150)
        expect(respuesta).toBe(0);
    }); 
});

