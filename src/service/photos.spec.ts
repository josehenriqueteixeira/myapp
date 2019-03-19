import { TestBed } from '@angular/core/testing';
import { PhotosService } from './photos';
import { PhotosMock } from '../mocks/PhotosMock';

describe('PhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { 
        provide: PhotosService, 
        useValue: new PhotosMock
      },    
    ]
  }));
  it('should be created', () => {
    const service: PhotosService = TestBed.get(PhotosService);
    expect(service).toBeTruthy();
  });

  it('get photos', () => {    
    const service: PhotosService = TestBed.get(PhotosService);    
    const albumid: string = '3';
    service.getPhotos(albumid).subscribe(photos => {
      expect(photos.length).toBe(2);
      expect(photos[0].albumId).toBe(3);      
      expect(photos[0].id).toBe(1);      
      expect(photos[0].title).toContain('Teste 1');      
      expect(photos[0].url).toContain('www.teste.com.br');      
      expect(photos[0].thumbnailUrl).toContain('teste.com.br');    
    });
    
  });


});

