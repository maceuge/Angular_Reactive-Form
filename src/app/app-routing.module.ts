import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ReactiveFormComponent} from './reactive-form/reactive_form.component';
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/reactiveform', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'reactiveform', component: ReactiveFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {}
