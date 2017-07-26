import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive_form.component.html',
  styleUrls: ['./reactive_form.component.css']
})

export class ReactiveFormComponent implements OnInit{

  customerForm: FormGroup;
  customer: Customer = new Customer();

  emailMessage: string;

  private validationMessages = {
    required: 'Este campo es obligatorio',
    pattern: 'El email no es valido'
  }

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9,-]+')]],
      phone: '',
      notification: 'email',
      sendCatalog: true
    });

    this.customerForm.get('notification').valueChanges
        .subscribe(value => console.log(value));

    const emailControl = this.customerForm.get('email');
          emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

  }

  setMessage (c: AbstractControl): void {
    this.emailMessage = '';
      if ((c.touched || c.dirty) && c.errors) {
          this.emailMessage = Object.keys(c.errors)
            .map(key => this.validationMessages[key]).join(' ');
      }
  }

  save () {
    console.log(this.customerForm);
    console.log('Guardado: ' + JSON.stringify(this.customerForm.value));
    // this.clearForm();
    // this.customerForm.reset();
    // this.customerForm.clearValidators();
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
    document.getElementById('firstName').focus()

    if (document.getElementById('firstName').focus()) {
      document.getElementById('firstName').blur();
      document.getElementById('lastName').focus();
    }

    // document.getElementById('lastName').focus();
    // document.getElementById('email').focus();

    this.customerForm.patchValue({
      firstName: 'Jason',
      lastName: 'Bourne',
      email: 'jason@gmail',
      sendCatalog: false
    });
  }

  clearForm () {
    this.customerForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notification: 'email',
      sendCatalog: false
    });
  }

}
