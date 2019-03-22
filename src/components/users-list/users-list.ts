import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/users';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import { UsersDetailsComponent } from '../users-details/users-details';

@Component({
    selector: 'users-list',
    templateUrl: 'users-list.html'
})

export class UserListComponent{

    constructor(
        public modalCtrl: ModalController,
        public navCtrl: NavController, 
        public navParams: NavParams
    ){}

    @Input() public userList: User;

    public users: Array<User>;
    selectedUser: User;

    openSettings(user: User) {
        this.selectedUser = user;
        let modal = this.modalCtrl.create(UsersDetailsComponent, {
          user_info: this.selectedUser     
        });
        modal.present();
    }
    
}


