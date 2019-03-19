import { TestBed } from '@angular/core/testing';
import { AlbumsService } from './albums';
import { AlbumsMock } from '../mocks/AlbumsMock';


describe('AlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { 
        provide: AlbumsService, 
        useClass: AlbumsMock
      }
    ]
  }));

  it('should be created', () => {
    const service: AlbumsService = TestBed.get(AlbumsService);
    expect(service).toBeTruthy();
  });

  it('get albums', () => {    
    const service: AlbumsService = TestBed.get(AlbumsService);    
    const user_id = '2';
    service.getAlbums(user_id).subscribe(albums => {
      expect(albums.length).toBe(2);
      expect(albums[0].userId).toBe(3);  
      expect(albums[0].id).toBe(1);      
      expect(albums[0].title).toContain('Teste 1');      
    });
  });


});

