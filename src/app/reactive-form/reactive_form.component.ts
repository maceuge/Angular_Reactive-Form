import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Customer } from './customer';
import 'rxjs/add/operator/debounceTime';

declare var Materialize: any;

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive_form.component.html',
  styleUrls: ['./reactive_form.component.css']
})

export class ReactiveFormComponent implements OnInit{

  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      phone: '',
      notification: 'email',
      sendCatalog: true
    });

    // this.customerForm.get('notification').valueChanges
    //     .subscribe(value => console.log(value));

    // const emailControl = this.customerForm.get('email');
    //       emailControl.valueChanges.debounceTime(3000).subscribe(value => this.setMessage(emailControl));


    this.customerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.customerForm) {
      return;
    }
    const form = this.customerForm;
    for (const field in this.formErrors) {
      // limpio mensajes de error anteriores
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'phone': ''
  };

  validationMessages = {
    'firstName': {
      'required':      'Nombre es requerido.',
      'minlength':     'Minimo tiene que ser 3 caracteres.',
    },
    'lastName': {
      'required':      'Apellido es requerido.',
      'maxlength':     'Solo hasta maximo de 15 caracteres.',
    },
    'email': {
      'required': 'Email es requerido.',
      'pattern': 'Ingrese un mail valido'
    },
    'phone': {
      'required': 'Telefono es requerido.',
    }
  };

  save () {
    console.log(this.customerForm);
    console.log('Guardado: ' + JSON.stringify(this.customerForm.value));
    this.customerForm.reset();
    Materialize.updateTextFields();
  }

  setNotification (notifVia: string) :void {
    const phoneContol = this.customerForm.get('phone');

      if (notifVia === 'text') {
         phoneContol.setValidators(Validators.required);
      } else {
         phoneContol.clearValidators();
      }
      phoneContol.updateValueAndValidity();
  }

  fillFormWithData () {

    this.customerForm.patchValue({
      firstName: 'Jason',
      lastName: 'Bourne',
      email: 'jason@gmail',
      notification: 'email',
      sendCatalog: false
    });

    Materialize.updateTextFields();
  }

  clearForm () {
    this.customerForm.reset();
    Materialize.updateTextFields();

    this.customerForm.patchValue({
      notification: 'email'
    });
  }

}
