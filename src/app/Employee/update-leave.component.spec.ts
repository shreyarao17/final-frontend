import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaveComponent } from './update-leave.component';

describe('UpdateLeaveComponent', () => {
  let component: UpdateLeaveComponent;
  let fixture: ComponentFixture<UpdateLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
