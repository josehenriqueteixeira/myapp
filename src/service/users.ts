import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';

@Injectable()
export class UsersService {

  constructor(
      private _http: HttpClient
  ) { }

    getUsers(): Observable<User[]>{
        const url: string = 'https://jsonplaceholder.typicode.com/users'
        return new Observable<User[]>(observer => {
            this._http.get<User[]>(url).subscribe(
                response => {
                    observer.next(response);
            });            
        });

    }
}
