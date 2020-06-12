import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.less']
})
export class UpdateLeaveComponent implements OnInit {
  updateleaveForm: FormGroup;
  private formBuilder: FormBuilder;

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateleaveForm = this.formBuilder.group({
        noofDays: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        leaveType: ['', Validators.required],
        reason: ['', Validators.required]
    });
  }

  onSubmit(){
    this.router.navigate(['/my-leaves']);    
  }

  

}
