var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../service/users';
import { UsersDetailsComponent } from '../../components/users-details/users-details';
import { ModalController } from 'ionic-angular';
var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, navParams, _users, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._users = _users;
        this.modalCtrl = modalCtrl;
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersPage.prototype.openSettings = function (user) {
        this.selectedUser = user;
        var modal = this.modalCtrl.create(UsersDetailsComponent, {
            user_info: this.selectedUser
        });
        modal.present();
    };
    UsersPage.prototype.getUsers = function () {
        var _this = this;
        this._users.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersPage = __decorate([
        Component({
            selector: 'page-users',template:/*ion-inline-start:"/home/dev15/myapp/src/pages/users/users.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="user-list">\n    <ion-item class="user-item" *ngFor="let user of users" \n              [class.selected]="user === selectedUser" \n              (click)="openSettings(user)">\n      <ion-avatar class="user-avatar">\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\n      </ion-avatar>\n      <ion-label class="user-name">{{user.name}}\n      </ion-label>    \n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/dev15/myapp/src/pages/users/users.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            UsersService,
            ModalController])
    ], UsersPage);
    return UsersPage;
}());
export { UsersPage };
//# sourceMappingURL=users.js.map