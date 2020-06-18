import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    flag=false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => {
        this.currentUser = x
        if(this.currentUser!=null)
        {
            if(this.currentUser.role=="employee"){
                this.flag=true;
                console.log(this.flag)
            }
        }
       
    });
    }
    
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}