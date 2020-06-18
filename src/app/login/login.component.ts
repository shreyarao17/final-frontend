import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/_models';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    flag=false;
    returnUrl: string;
    currentUser: any;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', Validators.required]
        });
        
      /*  let response=this.http.get("http://localhost:8081/login/a/a/employee");
        response.subscribe((data)=>console.log(data));*/
        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
      
        this.authenticationService.login(this.f.username.value, this.f.password.value, this.f.role.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.currentUser=data;
                    console.log(this.currentUser.name);
                    if(this.currentUser.name==null)
                    {
                        console.log(this.currentUser.name);
                        console.log("routing to login");
                        this.flag=true;
                        //this.error = error;
                        this.loading = false;
                        //this.router.navigate(['/']);
                    }
                       
                    else{
                        if(this.currentUser.role=='employee')
                             this.router.navigate(['/']);
                        else
                            this.router.navigate(['/manager-home']);
                    }
                   /* if(this.f.role.value=="employee"){
                        this.router.navigate(['/']);
                     }
                     if(this.f.role.value=="manager"){
                         this.router.navigate(['/manager-home'])
                     }*/
                },
                error => {
                    if(this.currentUser.name==null)
                    {
                    this.error = error;
                    this.loading = false;
                    }
                });
    }
}
