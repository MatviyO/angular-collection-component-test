import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 transform(data, value) {
   return data.filter( user => {
     return user.name.first.includes(value);
   });
 }
}
