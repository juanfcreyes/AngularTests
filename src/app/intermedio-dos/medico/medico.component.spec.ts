import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MeicoService } from './meico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

	let component: MedicoComponent;
	let fixture: ComponentFixture<MedicoComponent>;

	beforeEach(()=> {
		TestBed.configureTestingModule({
			declarations: [MedicoComponent],
			providers: [MeicoService],
			imports: [HttpClientModule]
		});
		fixture = TestBed.createComponent(MedicoComponent);
		component = fixture.componentInstance;
	});

	it('Debe de crearce el componente' , ()=> {
		expect(component).toBeTruthy();
	});

	it('Debe de retornar en nombre del medico' , ()=> {
		const nombre = 'Juan'
		const respuesta = component.saludarMedico(nombre);
		expect(respuesta).toContain(nombre);
	});

});
