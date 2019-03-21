import { NgModule } from '@angular/core';
import { UsersDetailsComponent } from '../../components/users-details/users-details';
import { UserListComponent } from '../../components/users-list/users-list';

@NgModule({
  declarations: [ UsersDetailsComponent, UserListComponent ],
  imports: [],
  entryComponents: [ UsersDetailsComponent, UserListComponent ]
})

export class UsersPageModule {}
