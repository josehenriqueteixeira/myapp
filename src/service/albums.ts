import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { Albums } from '../interfaces/albums';

@Injectable()
export class AlbumsService {

  constructor(
    private _http: HttpClient,
  ) { }
    
    getAlbums(user_id: string): Observable<Albums[]>{
        const url: string = `https://jsonplaceholder.typicode.com/albums?userId=${user_id}`
        return new Observable<Albums[]>(observer => {
            this._http.get<Albums[]>(url).subscribe(
                response => {
                    observer.next(response);
            });        
        });    
    }
    
}
