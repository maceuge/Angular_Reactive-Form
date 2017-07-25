import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive_form.component.html',
  styleUrls: ['./reactive_form.component.css']
})

export class ReactiveFormComponent implements OnInit{

  customerForm: FormGroup;
  customer: Customer = new Customer();

  ngOnInit (): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    })
  }

  save () {
    console.log();
    console.log('Guardado: ' + this.customerForm);
    this.customer.firstName = '';
  }

}
