import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../service/users';
import { UsersDetailsComponent } from '../../components/users-details/users-details';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {

  public users: Array<Users>;
  selectedUser: Users;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _users: UsersService,
    public modalCtrl: ModalController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ngOnInit() {
    this.getUsers();
  }

  openSettings(user: Users) {
      this.selectedUser = user;
      let modal = this.modalCtrl.create(UsersDetailsComponent, {
        user_info: this.selectedUser     
      });
      modal.present();
  }
  
  getUsers(){
    this._users.getUsers().subscribe(users => this.users = users);
  }
  
}


    