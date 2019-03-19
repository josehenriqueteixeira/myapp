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
import { NavParams, NavController } from 'ionic-angular';
import { AlbumsPage } from '../../pages/albums/albums';
var UsersDetailsComponent = /** @class */ (function () {
    function UsersDetailsComponent(params, navCtrl) {
        this.params = params;
        this.navCtrl = navCtrl;
    }
    UsersDetailsComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    UsersDetailsComponent.prototype.goToOtherPage = function () {
        this.navCtrl.push(AlbumsPage, {
            album_id: this.user_info.id
        });
    };
    UsersDetailsComponent.prototype.getUserInfo = function () {
        this.user_info = this.params.get('user_info');
    };
    UsersDetailsComponent = __decorate([
        Component({
            selector: 'users-details',template:/*ion-inline-start:"/home/dev15/myapp/src/components/users-details/users-details.html"*/'<ion-title>\n  <ion-item>Informações - Cliente ID: {{ user_info.id }}</ion-item>\n  <ion-item>Nome completo: {{ user_info.name }}</ion-item>\n  <ion-item>E-mail: {{ user_info.email }}</ion-item>\n  <ion-item>Telefone: {{ user_info.phone }}</ion-item>\n  <ion-item>Nome de usuário: {{ user_info.username }}</ion-item>\n  <ion-item>Web Site: <a href="http://{{ user_info.website }}">{{ user_info.website }}</a></ion-item>\n  <ion-item>Endereço: {{ user_info.address.street }} - {{ user_info.address.city }} - {{ user_info.address.zipcode }}</ion-item>\n  <ion-item>Empresa: {{ user_info.company.name }}</ion-item>\n  <ion-item class="album-list-link" (click)="goToOtherPage()">Listar Albuns deste usuário</ion-item>\n</ion-title>\n\n\n\n'/*ion-inline-end:"/home/dev15/myapp/src/components/users-details/users-details.html"*/
        }),
        __metadata("design:paramtypes", [NavParams,
            NavController])
    ], UsersDetailsComponent);
    return UsersDetailsComponent;
}());
export { UsersDetailsComponent };
//# sourceMappingURL=users-details.js.map