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
var AlbumsService = /** @class */ (function () {
    function AlbumsService(_http) {
        this._http = _http;
    }
    AlbumsService.prototype.getAlbums = function (user_id) {
        var _this = this;
        var url = "https://jsonplaceholder.typicode.com/albums?userId=" + user_id;
        return new Observable(function (observer) {
            _this._http.get(url).subscribe(function (response) {
                observer.next(response);
            });
        });
    };
    AlbumsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AlbumsService);
    return AlbumsService;
}());
export { AlbumsService };
//# sourceMappingURL=albums.js.map