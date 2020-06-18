import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '@app/_services/leave.service';
import { User } from '@app/_models';
import { Leave } from '@app/_models/leave';
import { MyleavesComponent } from './myleaves/myleaves.component';

@Component({
  selector: 'app-update-leave',
  providers: [MyleavesComponent],
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.less']
})
export class UpdateLeaveComponent implements OnInit {
  updateleaveForm: FormGroup;
  leave: Leave = new Leave();
  currentuser: User;
  oldleave:Leave;
  leaveid:string;
  
  constructor(private router: Router,private formBuilder: FormBuilder, private myleave: MyleavesComponent,
    private leaveService: LeaveService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.updateleaveForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leavetype: ['', Validators.required],
      reason: ['', Validators.required]
  });
  
    this.leaveid = this.route.snapshot.params['leaveid'];

    //console.log(this.leaveid);
    

    this.leaveService.getLeavebyleaveid(this.leaveid).pipe().subscribe(
      d=>{
        console.log("huhuhu"+d);
      this.oldleave=d;
      },
      error=>console.log(error));

   console.log(this.oldleave);

    
    this.currentuser=JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(data){
    
    this.leave=new Leave();
    this.leave.leaveid= this.leaveid;
    this.leave.managerid=this.currentuser.managerid;
    this.leave.empid= this.currentuser.empid;
    this.leave.fromdate=data.startDate;
    this.leave.todate=data.endDate;
    this.leave.type=data.leavetype;
    this.leave.reason=data.reason;
    this.leave.status="pending";
    console.log(this.leave);
    this.leaveService.update(this.leave)
     .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(['/my-leaves']);    
  }

  

}
