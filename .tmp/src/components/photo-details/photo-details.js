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
var PhotoDetailsComponent = /** @class */ (function () {
    function PhotoDetailsComponent(params, navCtrl) {
        this.params = params;
        this.navCtrl = navCtrl;
    }
    PhotoDetailsComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    PhotoDetailsComponent.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PhotoDetailsComponent.prototype.getPhotos = function () {
        this.url_photo = this.params.get('url_photo');
    };
    PhotoDetailsComponent = __decorate([
        Component({
            selector: 'photo-details',template:/*ion-inline-start:"/home/dev15/myapp/src/components/photo-details/photo-details.html"*/'<!-- Generated template for the PhotoDetailsComponent component -->\n<div>\n  <button ion-button icon-only (click)="closeModal()">\n      <ion-icon item-right name="ios-close-outline"></ion-icon>\n  </button>\n  <img src="{{url_photo}}">\n</div>\n'/*ion-inline-end:"/home/dev15/myapp/src/components/photo-details/photo-details.html"*/
        }),
        __metadata("design:paramtypes", [NavParams,
            NavController])
    ], PhotoDetailsComponent);
    return PhotoDetailsComponent;
}());
export { PhotoDetailsComponent };
//# sourceMappingURL=photo-details.js.map