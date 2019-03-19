var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
var PhotosService = /** @class */ (function () {
    function PhotosService(_http) {
        this._http = _http;
    }
    PhotosService.prototype.getPhotos = function (albumId) {
        var _this = this;
        var url = "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId;
        return new Observable(function (observer) {
            _this._http.get(url).subscribe(function (response) {
                observer.next(response);
            });
        });
    };
    PhotosService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PhotosService);
    return PhotosService;
}());
export { PhotosService };
//# sourceMappingURL=photos.js.map