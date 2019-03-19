import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { HttpClientModule }    from '@angular/common/http';
import { UsersService } from '../service/users';
import { UsersDetailsComponent } from '../components/users-details/users-details';
import { AlbumsService } from '../service/albums';
import { AlbumsPage } from '../pages/albums/albums';
import { PhotosPage } from '../pages/photos/photos';
import { PhotosService } from '../service/photos';
import { PhotoDetailsComponent } from '../components/photo-details/photo-details';


@NgModule({
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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
