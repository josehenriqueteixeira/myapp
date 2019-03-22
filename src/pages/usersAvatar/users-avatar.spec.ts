import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersAvatarPage } from '../usersAvatar/users-avatar';
import { UsersAvatarService } from '../../service/users-avatar';
import { UsersAvatarItemComponent } from '../../components/user-avatar-item/user-avatar-item';
import { UsersAvatarMock } from '../../mocks/UsersAvatarMock';

describe('UsersAvatarPage', () => {
  let component: UsersAvatarPage;
  let fixture: ComponentFixture<UsersAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAvatarPage, UsersAvatarItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ 
        provide: UsersAvatarService, 
        useValue: new UsersAvatarMock
      },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show avatar list', () => {
    let el: HTMLElement = fixture.nativeElement.querySelector('users-avatar-item');
    expect(el.innerText).toContain('Hanson');
  });

});
