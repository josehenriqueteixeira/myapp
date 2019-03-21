import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersAvatarPage } from '../usersAvatar/users-avatar';
import { By } from '@angular/platform-browser';
import { UsersAvatarService } from '../../service/users-avatar';
import { UserAvatar } from '../../interfaces/user-avatar';
import { Observable } from 'rxjs';
import { UsersAvatarItemComponent } from '../../components/user-avatar-item/user-avatar-item';

class UsersAvatarMock {

    getUsers(): Observable<UserAvatar[]>{    
        return new Observable<UserAvatar[]>(observer => {
            observer.next([{
                "avatars": [
                  {
                    "height": 133,
                    "size": "small",
                    "url": "https://tinyfac.es/data/avatars/1C4EEDC2-FE9C-40B3-A2C9-A038873EE692-200w.jpeg",
                    "width": 200
                  },
                  {
                    "height": 333,
                    "size": "medium",
                    "url": "https://tinyfac.es/data/avatars/1C4EEDC2-FE9C-40B3-A2C9-A038873EE692-500w.jpeg",
                    "width": 500
                  },
                  {
                    "height": 666,
                    "size": "large",
                    "url": "https://tinyfac.es/data/avatars/1C4EEDC2-FE9C-40B3-A2C9-A038873EE692-1000w.jpeg",
                    "width": 1000
                  },
                  {
                    "height": 1152,
                    "size": "original",
                    "url": "https://tinyfac.es/data/avatars/1C4EEDC2-FE9C-40B3-A2C9-A038873EE692.jpeg",
                    "width": 1728
                  }
                ],
                "avatars_origin": {
                  "facebook_profile_link": "https://www.facebook.com/app_scoped_user_id/10154937220707485/",
                  "id": 815,
                  "name": "Marco Sousa"
                },
                "first_name": "Hanson",
                "gender": "male",
                "last_name": "Earle"
              }]);
        });
    }        

}

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
