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
import { AlbumsService } from '../service/albums';
import { AlbumsPage } from '../pages/albums/albums';
import { PhotosPage } from '../pages/photos/photos';
import { PhotosService } from '../service/photos';
import { UsersAvatarPage } from '../pages/usersAvatar/users-avatar';
import { UsersAvatarService } from '../service/users-avatar';
// import { UserListComponent } from '../components/users-list/users-list';
import { UsersAvatarItemComponent } from '../components/user-avatar-item/user-avatar-item';
import { UsersDetailsComponent } from '../components/users-details/users-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsersPage,
    AlbumsPage,
    PhotosPage,
    UsersAvatarPage,
    // UserListComponent,
    UsersAvatarItemComponent,
    UsersDetailsComponent
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
    UsersAvatarPage,
    AlbumsPage,
    PhotosPage,
    // UserListComponent, 
    UsersAvatarItemComponent,
    UsersDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    AlbumsService,
    PhotosService,
    UsersAvatarService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
