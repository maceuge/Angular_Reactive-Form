import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormModule } from './reactive-form/reactive_form.module';

import { HomeComponent } from './home-page/home.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class GeneralModule { }
