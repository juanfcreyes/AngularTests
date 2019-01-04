import { Routes } from '@angular/router';
import { HospitalComponent } from 'src/app/intermedio-dos/hospital/hospital.component';
import { MedicoComponent } from 'src/app/intermedio-dos/medico/medico.component';
import { IncrementadorComponent } from 'src/app/intermedio-dos/incrementador/incrementador.component';

export const RUTAS: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];