import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedios/espias/medicos.component';
import { MedicoComponent } from './intermedio-dos/medico/medico.component';
import { MeicoService } from './intermedio-dos/medico/meico.service';
import { HospitalComponent } from './intermedio-dos/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-dos/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzadas/rutas/app.routes';
import { NavbarComponent } from './avanzadas/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzadas/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [
    MeicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
