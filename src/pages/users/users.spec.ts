import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersPage } from '../users/users';
import { NavParams, NavController, ModalController, Item } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { NavControllerMock } from '../../mocks/NavControllerMock';
import { ModalControllerMock } from '../../mocks/ModalControllerMock';
import { UsersService } from '../../service/users';
import { UsersMock } from '../../mocks/UsersMock';
import { By } from '@angular/platform-browser';
import { UsersDetailsComponent } from '../../components/users-details/users-details';

describe('Users Page', () => {
  let component: UsersPage;
  let fixture: ComponentFixture<UsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { 
          provide: UsersService, 
          useValue: new UsersMock
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
    fixture = TestBed.createComponent(UsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect global variables should be binded', () => {
    component.getUsers();
    expect(component.users[0].id).toBe(1);
  });  

  it('list users show', () => {
    component.getUsers();
    fixture.detectChanges();
    let listUsers: HTMLElement = fixture.nativeElement.querySelectorAll('ion-label')[0];
    expect(listUsers.textContent).toContain('jose henrique')
  })

  it('Click item', () => {
    let clickItem = component;
    spyOn(clickItem, 'openSettings').and.callThrough();   
    let el = fixture.debugElement.query(By.css('ion-item'));
    el.triggerEventHandler('click', null);
    expect(clickItem.openSettings).toHaveBeenCalled();
    fixture.detectChanges();
    const ModalControllerMock = jasmine.createSpyObj('openSettings',['present']);
    const modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function(){
      return ModalControllerMock;      
    })    
  });

  it('modal show', () => {
    // let el = fixture.debugElement.query(By.css('ion-item')).nativeElement;
    // expect(el.classList.has('user-item')).toBe(false);

    // component.openSettings(UsersMock[0]);
    // expect(el.classList.has('user-item')).toBe(true);
    // console.log(el.classList.has())


  })

});
