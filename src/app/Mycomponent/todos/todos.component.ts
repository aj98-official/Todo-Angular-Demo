import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
   todos:Todo[] = []

   constructor(){
      this.todos = [
        {
          sno: 1,
          title: "Buy Milk",
          desc: "Buy 2 litre of milk from the dairy shop",
          active: true
        },
        {
          sno: 2,
          title: "Buy Milk",
          desc: "Buy 2 litre of milk from the dairy shop",
          active: true
        },
        {
          sno: 3,
          title: "Buy Milk",
          desc: "Buy 2 litre of milk from the dairy shop",
          active: true
        },                
      ]
   }

   deleteTodo(todo: Todo){
         console.log(todo);
         
   }
}
