import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  template: `
  <h2 mat-dialog-title>{{description}}</h2>

<mat-dialog-content [formGroup]="form">
 <h4>Question:</h4>
 <h5>{{data.question
 }}</h5>
<br>
<h4>Options</h4>
<div>
<mat-radio-group>
<div *ngIf="Counter > 0" style="    right: 0;
position: absolute;
top: 0;
background-color: #F44336;
padding: 38px;
color: white;
margin-right: 10px;
height: 123px;
border-radius: 50%;
margin-top: 10px; ">
<h2 style="margin-top: -40px;
font-size: 91px;
">{{Counter}}</h2></div>
  <mat-radio-button style="margin-right:10px" *ngFor="let option of data.options" [value]="option">{{option}}</mat-radio-button>
</mat-radio-group>
</div>
<button class="mat-raised-button"(click)="close()">Close</button>
</mat-dialog-content>`,
  styleUrls: ['./home.component.scss']
})
export class QuestionComponent implements OnInit {
  form: FormGroup;
  description: string;
  data: any;
  Counter: any;
  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],
    });
  }
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
    this.setTime();
  }

  setTime() {
    let counter = 95;
    var CountDown = setInterval(() => {
      if (counter > 0) {
        counter--;
        this.Counter = counter;
      }
      else {
        clearInterval(CountDown);
        this.Counter = 0;
      }
    }, 1000);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}