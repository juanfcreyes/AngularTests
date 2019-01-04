import { obtenerRobots } from "./arreglos";

describe('Pruebas de Arreglos', () => {
    it('Debe retornar al menos tres robots', () => {
        const respuesta = obtenerRobots();
        expect(respuesta.length).toBeGreaterThanOrEqual(3);
    }); 

    it('Debe de existir Megaman y Ultron', () => {
        const respuesta = obtenerRobots();
        expect(respuesta).toContain('Megaman');
        expect(respuesta).toContain('Ultron');
    }); 
});

