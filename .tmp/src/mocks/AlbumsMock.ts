import { Albums } from '../interfaces/albums'
import { Observable } from 'rxjs';

export class AlbumsMock{
    public albums: Array<Albums> = [
        {
            userId: 3,
            id: 1,
            title: 'Teste 1',
        },
        {
            userId: 2,
            id: 2,
            title: 'Item 2',
        }
    ];

    getAlbums(): Observable<Albums[]>{    
        return new Observable<Albums[]>(observer => {
            observer.next(this.albums);
        });
    }

}

        


    

