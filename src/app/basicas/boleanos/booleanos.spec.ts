import { usuarioLogeado } from "./booleanos";

describe('Pruebas de Booleanos', () => {
    it('Debe retornar true', () => {
        expect(usuarioLogeado()).toBeTruthy();
    }); 
});

