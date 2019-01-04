import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);        
    });

    it('Comprobar carga inicial', () => {
        spyOn(servicio, 'getMedicos').and.callFake( () => {
            return from([['Medico1', 'Medico2', 'Medico3']]);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Comprobar llamada del servicio agregarMedico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
            return empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Comprobar que se agrego un medico', () => {
        const medico = { id: 1, nombre: 'Juan'};
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Pobrar error en la adicion', () => {
       const miError = 'NO se pudo agragar el medico';
       spyOn(servicio, 'agregarMedico').and
       .returnValue(throwError(miError))
       componente.agregarMedico();
       expect(componente.mensajeError).toBe(miError);
    });

    it('Comprobar llamada del servicio borrarMedico', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and
        .returnValue(empty())
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
     });

     it('Comprobar el no llamar al servicio borrarMedico', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and
        .returnValue(empty())
        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');
     });
});
