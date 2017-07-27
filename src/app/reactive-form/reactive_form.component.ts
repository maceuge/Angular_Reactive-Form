import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Customer } from './customer';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive_form.component.html',
  styleUrls: ['./reactive_form.component.css']
})

export class ReactiveFormComponent implements OnInit{

  customerForm: FormGroup;
  customer: Customer = new Customer();

  erorrMessage: string;

  private validationMessages = {
    required: 'Este campo es obligatorio',
    minLength: 'Tiene que tener minimo 3 caracteres',
    maxLength: 'Solo hasta maximo de 15 caracteres',
    pattern: 'El email no es valido'
  };

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

    // const emailControl = this.customerForm.get('email');
    //       emailControl.valueChanges.debounceTime(3000).subscribe(value => this.setMessage(emailControl));

    this.getFormControlKey();

  }

  getFormControlKey () {
    let keys = Object.keys(this.customerForm.controls);

    for (let key of keys) {

      const inputControl = this.customerForm.get(key);
            inputControl.valueChanges.debounceTime(2000)
              .subscribe(value => this.setMessage(inputControl));

       console.log(key);
    }
  }


  setMessage (c: AbstractControl): void {
    this.erorrMessage = '';
      if ((c.touched || c.dirty) && c.errors) {
          this.erorrMessage = Object.keys(c.errors)
            .map(key => this.validationMessages[key]).join(' ');
      }
      console.log(c.value);
  }

  save () {
    console.log(this.customerForm);
    console.log('Guardado: ' + JSON.stringify(this.customerForm.value));
    this.customerForm.reset();
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
    document.getElementById('firstName').focus();

    this.customerForm.patchValue({
      firstName: 'Jason',
      lastName: 'Bourne',
      email: 'jason@gmail',
      sendCatalog: false
    });
  }


}
