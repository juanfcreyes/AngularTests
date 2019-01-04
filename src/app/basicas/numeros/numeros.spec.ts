import { incrementar } from "./numeros";

describe('Pruebas de numeros', () => {
    it('Debe retornar 100', () => {
        const resultado = incrementar(300);
        expect(resultado).toBe(100);
    });

    it('Debe retornar el numero ingresado más uno, si no es mayor a 100', () => {
        const resultado = incrementar(50);
        expect(resultado).toBe(51);
    });

    it('Debe retornar cero', () => {
        const resultado = incrementar(undefined);
        expect(resultado).toBe(0);
    });

    it('Debe retornar Uno', () => {
        const resultado = incrementar(0);
        expect(resultado).toBe(1);
    });

})