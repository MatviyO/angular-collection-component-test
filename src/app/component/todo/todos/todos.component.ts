import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private isLoading = true;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchTodos().subscribe(() => {
      this.isLoading = false;

    });
  }
  onChange(id: number) {
    this.todoService.onToggle(id);
  }
  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

}
