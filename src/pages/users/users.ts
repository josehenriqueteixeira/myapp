import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { User } from '../../interfaces/users';
import { UsersService } from '../../service/users';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {

  public users: Array<User>;
  selectedUser: User;

  constructor(
    private _users: UsersService,
    public modalCtrl: ModalController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._users.getUsers().subscribe(users => this.users = users);
  }
  
}


    