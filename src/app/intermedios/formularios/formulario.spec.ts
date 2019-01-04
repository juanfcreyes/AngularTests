import { Formulario } from "./formulario";
import { FormBuilder } from '@angular/forms';

describe('Pruebas de Formmularios', () => {

    let componente : Formulario;

    beforeEach( () => {
      componente = new Formulario ( new FormBuilder());
    });
   
    it('Crear formulario con dos campos', () => {
       expect(componente.form.contains('email')).toBeTruthy();
       expect(componente.form.contains('password')).toBeTruthy();
    }); 

    it('Email obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    }); 

    it('Email valido', () => {
        const control = componente.form.get('email');
        control.setValue('juanfc@homtail.com');
        expect(control.valid).toBeTruthy();
    }); 
    
});