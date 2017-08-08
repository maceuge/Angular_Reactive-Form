import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive_form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormComponent
  ],
  declarations: [
    ReactiveFormComponent
  ],
})

export class ReactiveFormModule {}
