import { Component } from '@angular/core';
import { Todo } from "src/app/Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
 

  todos: Todo[];
  constructor(){
    let localItem =localStorage.getItem("todos")
    if(localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(localItem);
    }
    

  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
   localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  checkboxTodo(todo:Todo){
    for(let i =0;i<this.todos.length;i++){
     if(this.todos[i]==todo){
      this.todos[i].active=!this.todos[i].active;
      break;
     }
    }
  }
}
