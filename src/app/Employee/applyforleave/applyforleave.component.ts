import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Leave } from '@app/_models/leave';
import { LeaveService } from '@app/_services/leave.service';
import { User } from '@app/_models';

@Component({
  selector: 'app-applyforleave',
  templateUrl: './applyforleave.component.html',
  styleUrls: ['./applyforleave.component.less']
})
export class ApplyforleaveComponent implements OnInit {
  applyleaveForm: FormGroup;
  currentuser: User;
  num=0;
  id: string;
  l:Leave;
  leave: Leave = new Leave();
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private leaveService: LeaveService,
    private router: Router) { }

  ngOnInit() {
    this.applyleaveForm = this.formBuilder.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    leavetype: ['', Validators.required],
    reason: ['', Validators.required]
  });

  this.currentuser=JSON.parse(localStorage.getItem('currentUser'));
  }

  newEmployee(): void {
    this.submitted = false;
    this.leave = new Leave();
  }

  save() {
    console.log(this.leave)
   // this.leaveService.create(this.leave)
    //  .subscribe(data => console.log(data), error => console.log(error));
    this.leave = new Leave();
    this.gotoList();
  }
 

  onSubmit(data) {
    this.submitted = true;
    //console.log(data);
    this.leave=new Leave();
    this.leave.leaveid= this.generateleaveid();
    this.leave.managerid=this.currentuser.managerid;
    this.leave.empid= this.currentuser.empid;
    this.leave.fromdate=data.startDate;
    this.leave.todate=data.endDate;
    this.leave.type=data.leavetype;
    this.leave.reason=data.reason;
    this.leave.status="pending";
    console.log(this.leave);
    this.leaveService.create(this.leave)
     .subscribe(data => console.log(data), error => console.log(error));
   // this.save(data);    
  }

  generateleaveid()
  {
    //do{
      this.num=Math.floor((Math.random() * 100) + 1);
      this.id= this.num.toString();
      //this.leaveService.getLeavebyleaveid(this.id).subscribe(leavedata=> this.l=leavedata);
    //}while(this.l.reason!=null)
    return (this.id);
  }
  gotoList() {
    this.router.navigate(['/my-leaves']);
  }
}