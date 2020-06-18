import { Component, OnInit } from '@angular/core';
//import {Leaves} from '@app/_models'
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '@app/_services/leave.service';
import { UserService, AuthenticationService } from '@app/_services';
import { Leave } from '@app/_models/leave';

const state=false;
 

/*const data: Leaves[] = [
 {appliedOn: '1/05/2020', from: '5/05/2020', to: '10/05/2020', type: 'paid',status:'approved'},
 { appliedOn: '1/06/2020', from: '5/06/2020', to: '10/06/2020', type: 'unpaid',status:'rejected'},
 { appliedOn: '1/07/2020', from: '5/07/2020', to: '10/07/2020', type: 'paid',status:'approved'},
];*/
@Component({
  selector: 'app-myleaves',
  templateUrl: './myleaves.component.html',
  styleUrls: ['./myleaves.component.less']
})
export class MyleavesComponent implements OnInit {

  empLeaves:Leave[];
  //empLeaves;
  emp;
  empId;
  updateleaveid="";
  sno=0;
  
  constructor(private authService: AuthenticationService, private leaveService: LeaveService,private router: Router)
   { }

  ngOnInit(): void {
    
    this.emp = JSON.parse(localStorage.getItem('currentUser'));
    this.empId=this.emp.empid;
    console.log(this.empId);
    this.leaveService.getEmpLeaves(this.empId).subscribe(
       data=>{
      this.empLeaves=data;
    },
    
    
    error=>console.log(error)
    );

   
   
  }
  deleteLeave(id){
    this.leaveService.deleteLeave(id).subscribe(error=>{
      console.log(error)
     });
     this.ngOnInit();
    }

  updateLeave(leaveid)
  {
    console.log(leaveid);
    this.router.navigate(['update-leave',leaveid]);
    this.ngOnInit();
  }
}
