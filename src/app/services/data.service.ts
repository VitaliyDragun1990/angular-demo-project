import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: any, args: { [prop: string]: any }): Observable<any> {
    return this.http.patch(`${this.url}/${resource['id']}`, args)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // method responsible for error handling
  private handleError(err: HttpErrorResponse) {
    if (err.status === 400) {
      return Observable.throw(new BadInput(err.error));
    }
    if (err.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(err));
  }

}
