import { JugadorEE } from "./jugador-ee";

describe('Pruebas de Evente Emmitter', () => {

    let jugador : JugadorEE;
    let nuevoPuntaje = 0;
    beforeEach( () => {
        jugador = new JugadorEE();
        jugador.puntosVidaCambia.subscribe((puntosVida) => {
            nuevoPuntaje = puntosVida;
        });
    });
   
    it('Debe emitir un evento cuando recibe daño', () => {
        jugador.recibeDanio(1000);
        expect(nuevoPuntaje).toBe(0);
    }); 

    it('Debe emitir un evento cuando recibe daño y sobrevivir si es menor a 100', () => {
        jugador.recibeDanio(50);
        expect(nuevoPuntaje).toBe(50);
    }); 
    
});