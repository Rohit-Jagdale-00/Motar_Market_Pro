import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './item-component.html',
  styleUrls: ['./item-component.css'],
  standalone:true
})
export class ItemComponent {
  todos=signal<string[]>([]);
  newTodo=signal<string>('');
  totalItems=computed(()=>this.todos().length);

  addTodo(){
    const todo=this.newTodo().trim();
    if(todo){
      this.todos.update(todos=>[...todos,todo]);
      this.newTodo.set('');
    }//addTodo
  }
    removeTodo(index:Number){
      this.todos.update(todos=>todos.filter((_,i)=>i!==index))
    }
}
