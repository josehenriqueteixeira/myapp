import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsersAvatarService } from '../../service/users-avatar';
import { UserAvatar } from '../../interfaces/user-avatar';

@IonicPage()
@Component({
  selector: 'page-users-avatar',
  templateUrl: 'users-avatar.html'
})
export class UsersAvatarPage {

    public usersavatars: Array<UserAvatar>;

    constructor(
        private _useravatar: UsersAvatarService
    ) {}

    ngOnInit() {
        this.getUsersAvatar();
    }

    getUsersAvatar() {
        this._useravatar.getUsers().subscribe(usersavatars => this.usersavatars = usersavatars);
    }

}    