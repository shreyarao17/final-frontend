import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';




@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private url = 'http://localhost:8081/login';
   
    
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public  getcu(): User {
        return JSON.parse(localStorage.getItem('currentUser'));
    }


   
    login(username: string, password: string, role: string) :Observable<User>{
        const loginurl= `${this.url}/${username}/${password}/${role}`;
        return this.http.get<User>(loginurl).pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(user.name!=null)
            {
                 console.log(user);
                 localStorage.setItem('currentUser', JSON.stringify(user));
                 this.currentUserSubject.next(user);
            }
            console.log(user);
            return user;
        }));
        
    }
  

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}