import { Photos } from '../interfaces/photos'
import { Observable } from 'rxjs';

export class PhotosMock{
    
    public photos: Array<Photos> = [
        {
            albumId: 3,
            id: 1,
            title: 'Teste 1',
            url: 'www.teste.com.br',
            thumbnailUrl: 'teste.com.br'
        },
        {
            albumId: 2 ,
            id: 2,
            title: 'Teste photo2',
            url: 'www.teste2.com.br',
            thumbnailUrl: 'teste2.com.br'
        }
    ];

    getPhotos(): Observable<Photos[]>{    
        return new Observable<Photos[]>(observer => {
            observer.next(this.photos);
        });
    }

}

        


    

