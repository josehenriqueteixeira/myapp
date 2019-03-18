import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { UsersDetailsComponent } from '../../components/users-details/users-details';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    UsersDetailsComponent
  ],
})

export class UsersPageModule {}
