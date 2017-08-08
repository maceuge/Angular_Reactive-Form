
import {Component} from "@angular/core";

@Component({
  selector: 'home',
  template: `<h3 class="pink-text text-accent-3 center-align">{{coment}}</h3>`
})

export class HomeComponent {
  coment: string = 'Bienvenuti';
}
