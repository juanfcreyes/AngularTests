import { mensaje } from "./string";

describe('Pruebas de Strings', () => {
    it('Debe regresar un string', () => {
        const respuesta = mensaje('Juan');
        expect(typeof respuesta).toBe('string');

    });

    it('Debe regresar un saludo con el nommbre enviado', () => {
        const nombre = "Juan"
        const respuesta = mensaje(nombre);
        expect(respuesta).toContain(nombre);
    });
});

