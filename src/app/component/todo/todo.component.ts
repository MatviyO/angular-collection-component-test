import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {id: 1, title: 'car', completed:  false, date: new Date()},
    {id: 2, title: 'bike', completed:  false,  date: new Date()},
    {id: 3, title: 'cupe', completed:  false,  date: new Date()}
  ]
  appTitle = 'Angular todo '
  constructor() { }

  ngOnInit() {
  }

}
