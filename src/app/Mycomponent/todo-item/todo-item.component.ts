import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo = {
      sno: 0,
      title: "",
      desc: "",
      active: false
    }
    @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
    constructor(){
    }
    onClick(todo: Todo) {
       this.todoDelete.emit(todo)
    }
}
