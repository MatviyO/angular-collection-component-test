import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../component/todo/todo.service';

@Pipe({
name: 'todosFilter'
})
 export  class TodosFilterPipe implements PipeTransform {
  transform(todos: Todo[], search = ''): Todo[] {
    if (!search.trim()) {
       return todos;
    }
    return todos.filter(todo => {
      return todo.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    });
  }
}
