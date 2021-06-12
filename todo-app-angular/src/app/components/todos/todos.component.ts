import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
  
  todos: Todo[];
  inputTodo: string = '';

  ngOnInit(): void {
    this.todos = [
      {
        content: 'wakeup',
        completed: false
      },
      {
        content: 'coffee',
        completed: false
      }
    ]
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo=''
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter( (v,i) => i!==id )
  }
  // markAsDone(id: number) {
  //   this.todos.map((v, i) => {
  //     if(i === id ) v.completed = !v.completed;
  //     return v;
  //   })
  // }
}
