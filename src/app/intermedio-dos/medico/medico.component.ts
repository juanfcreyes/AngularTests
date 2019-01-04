import { Component, OnInit } from '@angular/core';
import { MeicoService } from './meico.service';

@Component({
	selector: 'app-medico',
	templateUrl: './medico.component.html',
	styles: []
})
export class MedicoComponent implements OnInit {

	medicos: any[] = [];

	constructor(public meicoService: MeicoService) { }

	ngOnInit() {
	}

	saludarMedico(nombre: string) {
		return `Saludos ${nombre}`;
	}

	obtenerMedicos() {
		this.meicoService.getMedicos()
		.subscribe((medicos: any[])=> {
			this.medicos = medicos
		})
	}

}
