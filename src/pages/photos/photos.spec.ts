import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosPage } from '../photos/photos'
import { PhotosMock } from '../../mocks/PhotosMock';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { PhotosService } from '../../service/photos';
import { NavControllerMock } from '../../mocks/NavControllerMock';
import { ModalControllerMock } from '../../mocks/ModalControllerMock';
import { By } from '@angular/platform-browser';

describe('PhotosPage', () => {
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { 
          provide: PhotosService, 
          useValue: new PhotosMock
        },
        {
          provide: NavParams,
          useValue: new NavParamsMock
        },
        {
          provide: NavController,
          useValue: new NavControllerMock
        },
        {
          provide: ModalController,
          useValue: new ModalControllerMock
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect global variables should be binded', () => {
    component.getPhotos();
    expect(component.photos[0].url).toBe('www.teste.com.br');
  });  

  it('photos list show', () => {
    component.getPhotos();
    fixture.detectChanges();
    let listPhotos: HTMLElement = fixture.nativeElement.querySelectorAll('ion-col')[0];
  });

  it('photo modal selected show', () =>{
    // verificar
    component.getPhotos();
    fixture.detectChanges();    
    let listPhotos: HTMLElement = fixture.nativeElement.querySelectorAll('ion-col')[0];
  });

  it('Click photo', () => {
    let clickItem = component;
    spyOn(clickItem, 'openSettings').and.callThrough(); 
    let el = fixture.debugElement.query(By.css('ion-col'));
    el.triggerEventHandler('click', null);
    expect(clickItem.openSettings).toHaveBeenCalled();
    fixture.detectChanges();    
    const ModalControllerMock = jasmine.createSpyObj('openSettings',['present']);
    const modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function(){
      return ModalControllerMock;      
    })    
  });

});
