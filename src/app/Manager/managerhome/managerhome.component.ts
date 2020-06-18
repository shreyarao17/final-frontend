import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.less']
})
export class ManagerhomeComponent implements OnInit {
  loading = false;
  users: User[];
  currentuser: User;
  constructor(private userService: UserService, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.loading = false;
  
  this.currentuser=JSON.parse(localStorage.getItem('currentUser'));

}
}