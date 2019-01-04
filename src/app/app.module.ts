import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedios/espias/medicos.component';
import { MedicoComponent } from './intermedio-dos/medico/medico.component';
import { MeicoService } from './intermedio-dos/medico/meico.service';
import { HospitalComponent } from './intermedio-dos/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-dos/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MeicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
