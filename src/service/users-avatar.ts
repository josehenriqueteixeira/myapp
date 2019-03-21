import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { UserAvatar } from '../interfaces/user-avatar';

@Injectable()
export class UsersAvatarService {

  constructor(
      private _http: HttpClient
  ) { }

    getUsers(): Observable<UserAvatar[]>{
        const url: string = 'https://tinyfac.es/api/users'
        return new Observable<UserAvatar[]>(observer => {
            this._http.get<UserAvatar[]>(url).subscribe(
                response => {
                    observer.next(response);
            });            
        });

    }
}
