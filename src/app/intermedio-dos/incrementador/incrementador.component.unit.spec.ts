import { IncrementadorComponent } from "./incrementador.component";

describe('Incremendator Component Unit', () => {

    let component: IncrementadorComponent;
    
    beforeEach(() => {
        component = new IncrementadorComponent();
    });

    it ('No debe de pasar de 100 el progreso', () => {
        component.cambiarValor(105)
        expect(component.progreso).toBe(100);
    });
   
});
