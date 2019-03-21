import { Component, Input } from '@angular/core';
import { UserAvatar } from '../../interfaces/user-avatar';

@Component({
    selector: 'users-avatar-item',
    templateUrl: 'user-avatar-item.html'
})
export class UsersAvatarItemComponent {
    
    @Input() public userAvatar: UserAvatar;
         
  }