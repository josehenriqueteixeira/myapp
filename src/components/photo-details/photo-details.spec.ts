import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavParams, NavController, ModalController, Item } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { NavControllerMock } from '../../mocks/NavControllerMock';
import { ModalControllerMock } from '../../mocks/ModalControllerMock';
import { UsersService } from '../../service/users';
import { UsersMock } from '../../mocks/UsersMock';
import { UsersDetailsComponent } from '../users-details/users-details';
import { PhotoDetailsComponent } from './photo-details';

fdescribe('Users Details Component', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
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
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
