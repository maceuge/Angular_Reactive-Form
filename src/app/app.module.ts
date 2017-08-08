import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormModule } from './reactive-form/reactive_form.module';
import { AppRoutingModule } from "./app-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})

export class GeneralModule { }
