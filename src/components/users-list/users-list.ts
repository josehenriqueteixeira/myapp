import { Component, Input } from '@angular/core';

@Component({
    selector: 'users-list',
    templateUrl: 'users-list.html'
})

export class UserListComponent{

    @Input() public name: string;

}
