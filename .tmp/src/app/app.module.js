var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../pages/users/users';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users';
import { UsersDetailsComponent } from '../components/users-details/users-details';
import { AlbumsService } from '../service/albums';
import { AlbumsPage } from '../pages/albums/albums';
import { PhotosPage } from '../pages/photos/photos';
import { PhotosService } from '../service/photos';
import { PhotoDetailsComponent } from '../components/photo-details/photo-details';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                ListPage,
                UsersPage,
                UsersDetailsComponent,
                AlbumsPage,
                PhotosPage,
                PhotoDetailsComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                IonicModule.forRoot(MyApp, {}, {
                    links: [
                        { loadChildren: '../pages/albums/albums.module#AlbumsPageModule', name: 'AlbumsPage', segment: 'albums', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                ListPage,
                UsersPage,
                UsersDetailsComponent,
                AlbumsPage,
                PhotosPage,
                PhotoDetailsComponent
            ],
            providers: [
                StatusBar,
                SplashScreen,
                UsersService,
                AlbumsService,
                PhotosService,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map