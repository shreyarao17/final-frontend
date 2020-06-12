import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-applyforleave',
  templateUrl: './applyforleave.component.html',
  styleUrls: ['./applyforleave.component.less']
})
export class ApplyforleaveComponent implements OnInit {
  noofDays: string
  startDate: Date
  endDate: Date
  leavetype: string
  reason: string

  constructor(private myRoute: Router) { }

  ngOnInit(): void {
   
  }

  saveapplication(empappl: NgForm): void {
    console.log(empappl);
  }

}
