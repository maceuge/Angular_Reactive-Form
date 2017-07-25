import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home-page/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive_form.component';


const routes = [
  {path: 'reactiveform', component: ReactiveFormComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class GeneralModule { }
