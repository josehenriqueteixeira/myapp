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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PhotosService } from '../../service/photos';
import { PhotoDetailsComponent } from '../../components/photo-details/photo-details';
var PhotosPage = /** @class */ (function () {
    function PhotosPage(navCtrl, navParams, _photos, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._photos = _photos;
        this.modalCtrl = modalCtrl;
        this.albumid = this.navParams.get('photo');
    }
    PhotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotosPage');
    };
    PhotosPage.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    PhotosPage.prototype.openSettings = function (photos) {
        this.selectedPhoto = photos;
        var modal = this.modalCtrl.create(PhotoDetailsComponent, {
            url_photo: this.selectedPhoto.url
        });
        modal.present();
    };
    PhotosPage.prototype.getPhotos = function () {
        var _this = this;
        this._photos.getPhotos(this.albumid).subscribe(function (photos) { return _this.photos = photos; });
    };
    PhotosPage = __decorate([
        Component({
            selector: 'page-photos',template:/*ion-inline-start:"/home/dev15/myapp/src/pages/photos/photos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Photos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 *ngFor="let photo of photos"\n              [class.selected]="photo === selectedPhoto"\n              (click)="openSettings(photo)">\n        <img src="{{ photo.url }}">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/home/dev15/myapp/src/pages/photos/photos.html"*/,
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            PhotosService,
            ModalController])
    ], PhotosPage);
    return PhotosPage;
}());
export { PhotosPage };
//# sourceMappingURL=photos.js.map