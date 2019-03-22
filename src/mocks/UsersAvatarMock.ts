import { Observable } from "rxjs";
import { UserAvatar } from "../interfaces/user-avatar";

export class UsersAvatarMock {

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
