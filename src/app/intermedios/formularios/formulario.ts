import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Formulario {

    form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

}