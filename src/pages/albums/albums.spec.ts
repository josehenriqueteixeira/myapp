import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsMock } from '../../mocks/AlbumsMock';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { NavControllerMock } from '../../mocks/NavControllerMock';
import { AlbumsPage } from './albums';
import { AlbumsService } from '../../service/albums';

describe('AlbumsPage', () => {
  let component: AlbumsPage;
  let fixture: ComponentFixture<AlbumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { 
          provide: AlbumsService, 
          useValue: new AlbumsMock
        },
        {
          provide: NavParams,
          useValue: new NavParamsMock
        },
        {
          provide: NavController,
          useValue: new NavControllerMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect global variables should be binded', () => {
    component.getAlbums();
    expect(component.albums[0].title).toBe('Teste 1');
  });  

  it('photos list show', () => {
    component.getAlbums();
    fixture.detectChanges();
    let listAlbums: HTMLElement = fixture.nativeElement.querySelectorAll('ion-label')[0];
    expect(listAlbums.textContent).toContain('1 - Teste 1');
  });

});
