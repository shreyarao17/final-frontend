import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    currentuser: User;

    constructor(private userService: UserService, private authservice: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;

        this.currentuser=JSON.parse(localStorage.getItem('currentUser'));
        this.loading=false;
    }
}