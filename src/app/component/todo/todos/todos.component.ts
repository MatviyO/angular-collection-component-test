import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../todo.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private isLoading = true;
  private searchString = ''

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
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
