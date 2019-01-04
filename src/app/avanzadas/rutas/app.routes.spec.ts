import { RUTAS } from "./app.routes";
import { MedicoComponent } from "src/app/intermedio-dos/medico/medico.component";

describe('Rutas principales', () => {
    it ('Existencia la ruta: /medico/:id', () => {
        expect(RUTAS).toContain({
            path: 'medico/:id', component: MedicoComponent
        });
    });
});