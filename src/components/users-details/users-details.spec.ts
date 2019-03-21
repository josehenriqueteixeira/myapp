import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersDetailsComponent } from './users-details';
import { NavParams, NavController } from 'ionic-angular';
import { NavParamsMock } from '../../mocks/NavParamsMock';
import { NavControllerMock } from '../../mocks/NavControllerMock';

describe('Photo details page', () => {
  let component: UsersDetailsComponent
  let fixture: ComponentFixture<UsersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsComponent ],
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
    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testes', () => {
    component.user_info = {
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
    }
    fixture.detectChanges();
    let list_user_info: HTMLElement = fixture.nativeElement.querySelectorAll('ion-item')[1];
    expect(list_user_info.textContent).toContain('jose henrique');    
  });

});
