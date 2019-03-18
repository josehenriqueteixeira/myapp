import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Users } from '../../interfaces/users';
import { AlbumsPage } from '../../pages/albums/albums';

@Component({
  selector: 'users-details',
  templateUrl: 'users-details.html'
})
export class UsersDetailsComponent implements OnInit{
  
  user_info: Users;
  
  constructor(
    public params: NavParams,
    public navCtrl: NavController
   ) {}

  ngOnInit() {
    this.user_info = this.params.get('user_info');
  }

  goToOtherPage(){
    this.navCtrl.push(AlbumsPage, {
      album_id: this.user_info.id
    });
  }

}
