import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { User } from '../../interfaces/users';
import { AlbumsPage } from '../../pages/albums/albums';

@Component({
  selector: 'users-details',
  templateUrl: 'users-details.html'
})
export class UsersDetailsComponent {
  
  user_info: User;
  
  constructor(
    public params: NavParams,
    public navCtrl: NavController
   ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  goToOtherPage(){
    this.navCtrl.push(AlbumsPage, {
      album_id: this.user_info.id
    });
  }

  getUserInfo(){
    this.user_info = this.params.get('user_info');
  }

}
