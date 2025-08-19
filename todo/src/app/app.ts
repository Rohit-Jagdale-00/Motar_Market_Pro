import { Component, signal } from '@angular/core';
import { ItemComponent } from './item-component/item-component';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [ItemComponent],
  //templateUrl: './app.html',
  styleUrls: ['./app.css'],
  template:`
  <app-item-component></app-item-component>
  `
})
export class App {
  protected readonly title = signal('todo');
}
