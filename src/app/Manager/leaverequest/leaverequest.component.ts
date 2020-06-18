import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { Leave } from '@app/_models/leave';
import { LeaveService } from '@app/_services/leave.service';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.less']
})
export class LeaverequestComponent implements OnInit {

  emp:User;
  empId;
  empLeaves: Leave[];
  leave: Leave;
  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.emp = JSON.parse(localStorage.getItem('currentUser'));
    this.empId=this.emp.empid;
    //console.log(this.empId);
    this.leaveService.getLeaveRequests(this.empId).subscribe(
       data=>{
      this.empLeaves=data;
    },
    
    
    error=>console.log(error)
    );

  }

  acceptLeave(leaveid)
  {
      this.leaveService.acceptLeave(leaveid).subscribe(data=>{
          this.leave=data;
      });
      this.ngOnInit();
  }

  rejectLeave(leaveid)
  {
      this.leaveService.rejectLeave(leaveid).subscribe(data=>{
          this.leave=data;
      });
      this.ngOnInit();
  }


}
