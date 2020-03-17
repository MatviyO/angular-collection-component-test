import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, mapTo} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MServiceService {
  size = 8;
  resultsList;
  p = 'results';
  constructor(private http: HttpClient ) { }
  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb').pipe(map((d) => {
          this.resultsList = d[this.p];
          return this.resultsList;
    }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }



  setSize(size) {
    this.size = size;
  }

}
