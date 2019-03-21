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
import { AlbumsService } from '../../service/albums';
import { PhotosPage } from '../photos/photos';
var AlbumsPage = /** @class */ (function () {
    function AlbumsPage(navCtrl, navParams, _albums) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._albums = _albums;
        this.user_id = this.navParams.get('album_id');
    }
    AlbumsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumsPage');
    };
    AlbumsPage.prototype.ngOnInit = function () {
        this.getAlbums();
    };
    AlbumsPage.prototype.goToOtherPage = function (album) {
        this.navCtrl.push(PhotosPage, {
            photo: album.id
        });
    };
    AlbumsPage.prototype.getAlbums = function () {
        var _this = this;
        this._albums.getAlbums(this.user_id).subscribe(function (albums) { return _this.albums = albums; });
    };
    AlbumsPage = __decorate([
        Component({
            selector: 'page-albums',template:/*ion-inline-start:"/home/dev15/myapp/src/pages/albums/albums.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Albuns</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="goToOtherPage(album)" *ngFor="let album of albums">\n      <ion-label>\n        {{album.id}} - {{album.title}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/dev15/myapp/src/pages/albums/albums.html"*/,
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlbumsService])
    ], AlbumsPage);
    return AlbumsPage;
}());
export { AlbumsPage };
//# sourceMappingURL=albums.js.map