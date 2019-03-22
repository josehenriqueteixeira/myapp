import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAvatar } from '../../interfaces/user-avatar';
import { UsersAvatarItemComponent } from '../../components/user-avatar-item/user-avatar-item'
import { UsersAvatarMock } from '../../mocks/UsersAvatarMock';

const USERAVATAR: UserAvatar = {
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
};


describe('UsersAvatarItem', () => {
  let component: UsersAvatarItemComponent;
  let fixture: ComponentFixture<UsersAvatarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAvatarItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAvatarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show avatar', () => {
    component.userAvatar = USERAVATAR;
    fixture.detectChanges();
    let el: HTMLElement = fixture.nativeElement.querySelector('ion-item');
    let el_img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(el_img.attributes['src'].value).toContain(USERAVATAR.avatars[0].url);
    expect(el.innerText).toContain('Hanson');
  });

});
