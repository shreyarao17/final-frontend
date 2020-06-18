import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Leave } from '@app/_models/leave';

@Injectable({
    providedIn: 'root'
  })
  export class LeaveService {
  url="http://localhost:8081/findLeavesByEmpid";
  url1="http://localhost:8081/deleteByLeaveid";
  url3="http://localhost:8081/getAllLeavesUnderaManager";
  url4="http://localhost:8081/acceptLeave";
  url5="http://localhost:8081/rejectLeave";
  url6="http://localhost:8081/createLeave";
  url7="http://localhost:8081/findLeaveByLeaveid";
  url8="http://localhost:8081/updateLeave";
  l: Leave;
    constructor(private http:HttpClient) { }
  
    create(leave)
    {
      return this.http.post(`${this.url6}`, leave);
    }
    update(leave)
    {
      return this.http.put(`${this.url8}`, leave);
    }
  
    getLeaveRequests(empid)
    {
      return this.http.get<Leave[]>(`${this.url3}/${empid}`).pipe(map(leaves => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return leaves;
    }));
    }

    getLeavebyleaveid(leaveid)
    {
      console.log(this.url7+"/"+leaveid);
      return this.http.get<Leave>(`${this.url7}/${leaveid}`).pipe(map(leaves =>{
        return leaves;
      }));
    }

    acceptLeave(leaveid)
    {
      return this.http.get<Leave>(`${this.url4}/${leaveid}`).pipe(map(leaves => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return leaves;
    }));
    }

    rejectLeave(leaveid)
    {
      return this.http.get<Leave>(`${this.url5}/${leaveid}`).pipe(map(leaves => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return leaves;
    }));
    }

    deleteLeave(id){
     // console.log (id);
      console.log(this.url1+"/"+id);
      return this.http.get(`${this.url1}/${id}`);
    }

    getEmpLeaves(id){
        console.log(id);
      return this.http.get<Leave[]>(`${this.url}/${id}`).pipe(map(users => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return users;
    }));
    }
  
  }
  