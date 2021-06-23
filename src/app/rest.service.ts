import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/items/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export interface Item{
  _id: string;
  name: string;
  sortOrder: number;
  creationDate: Date;
  lastUpdate: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class RestService{
  constructor(private http: HttpClient){ }

  private extractData(res: Response){
    let body = res;
    return body || { };
  }

  getItems(): Observable<any>{
    return this.http.get<Item>(endpoint + '').pipe(catchError(this.handleError))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}