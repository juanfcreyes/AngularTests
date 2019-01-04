import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });
        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
    });

    it('Debe mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges();
        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(element.innerHTML).toContain('Progreso de carga'); 
    });

    it('Debe mostrar el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const element = fixture.debugElement.query(By.css('#progreso')).nativeElement;
            expect(element.value).toBe('55'); 
        });
    });

    it('Debe incrementar/decrementar en 5 el valor del progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45); 
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50); 
    });

    it('Comprobar max y min valores permitidos en 5 el valor del progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))
        for (let i = 0; i < 12; i ++) {
            botones[0].triggerEventHandler('click', null);
        }
        expect(component.progreso).toBe(0); 
        for (let i = 0; i < 25; i ++) {
            botones[1].triggerEventHandler('click', null);
        }
        expect(component.progreso).toBe(100); 
    });

    it('Mostrar progreso en el titulo', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(element.innerHTML).toContain('45'); 
    });

});
