import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from '../users-list/users-list'
import { User } from '../../interfaces/users';
import { NavParams, ModalController, NavController } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { NavControllerMock } from '../../mocks/NavControllerMock';
import { ModalControllerMock } from '../../mocks/ModalControllerMock';
import { By } from '@angular/platform-browser';

const USERTESTE: User = {
      id: 1,
      name: 'jose henrique',
      username: 'josehteixeira10',
      email: 'josehenrique@quickfast.com',
      phone: '1140634100',
      website: 'teste.com.br',
      company:{
          name: 'quickfast',
          catchPhrase: 'teste',
          bs: 'teste2'
      },
      address:{
          street: 'Rua Piaui',
          city: 'Itapecerica da Serra',
          zipcode: '06852-000',
          suite: 'teste',
          geo:{
              lat: '-21.53525441',
              lng: '-23.6598716'
          }
      }
  };

describe('User List', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], 
      providers: [
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
      }
    ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.userList = USERTESTE;
    fixture.detectChanges();
  });

  it('Click item list', () => {    
      component.userList = USERTESTE;
      let clickItem = component.selectedUser;
      fixture.detectChanges();
      let el: HTMLElement = fixture.nativeElement.querySelector('ion-item');
      expect(el.innerText).toContain('jose henrique');
  });

});
