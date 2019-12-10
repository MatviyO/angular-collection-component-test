import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, mapTo} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()

export class LocalService {
  private url = 'http://localhost:5000/api/post';
  resultsPosts;
  constructor(private http: HttpClient ) { }

  getPosts() {
    return this.http.get(this.url).pipe(map((d) => {
        this.resultsPosts = d;
        return this.resultsPosts;
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  createUser(user) {
    return this.http.post(this.url, user);
  }
  updateUser(id: number, user) {
    const urlParams = new HttpParams().set('_id', id.toString());
    return this.http.put(this.url, user, { params: urlParams});
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
