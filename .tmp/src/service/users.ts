import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable()
export class UsersService {

  constructor(
      private _http: HttpClient
  ) { }

    getUsers(): Observable<Users[]>{
        const url: string = 'https://jsonplaceholder.typicode.com/users'
        return new Observable<Users[]>(observer => {
            this._http.get<Users[]>(url).subscribe(
                response => {
                    observer.next(response);
            });            
        });

    }
}
