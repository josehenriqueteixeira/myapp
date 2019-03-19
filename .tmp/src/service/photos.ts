import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { Photos } from '../interfaces/photos';

@Injectable()
export class PhotosService {

    constructor(
        private _http: HttpClient
    ){}

    getPhotos(albumId: string): Observable<Photos[]>{
        const url: string = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        return new Observable<Photos[]>(observer => {
            this._http.get<Photos[]>(url).subscribe(
                response =>{
                    observer.next(response);
            });
        });
    }

}