import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatapushService } from './datapush.service';

@Component({
  selector: 'app-question',
  template: `
  <h2 mat-dialog-title>{{description}}</h2>
<div style="margin-top:-38px;text-align:center">
<mat-form-field  style="    font-size: 25px;
margin-top: 20px;
width: 28%;">
<mat-select  placeholder="Quetion To" [(value)]="teamName">
    <mat-option  >None</mat-option>
  <mat-option (click)="teamIndexCall(k)" *ngFor="let team of teams;let k = index" [value]="team.name">{{ team.name }}</mat-option>
</mat-select>
</mat-form-field> 
</div>
<mat-dialog-content>
 <h5 style="font-size:40px">{{data.id}}, {{data.question
 }}</h5>
<br>
<div>
<mat-radio-group class="example-radio-group" [(ngModel)]="SelectedAnswer" style="font-size: 34px;">
  <mat-radio-button class="example-radio-button"  *ngFor="let option of data.options" [value]="option">{{option}}</mat-radio-button>
</mat-radio-group>
</div>
<div [ngStyle]="{'background-color': showCorrect  ? '#4CAF50' : '#F44336' }" *ngIf="showCorrect || showIncorrect " style="position: absolute;
top: 0;
margin-top: 22%;
box-shadow: 1px 2px 10px 2px #313131c2;
margin-left: 40%;
animation: slam 1s;
animation-timing-function: ease-in;
color: white;
padding: 28px;
transform: );
transform: rotate(-28deg);">
<h4 style="font-size: 40px;" *ngIf="showCorrect">Correct</h4>
<h4 style="font-size: 40px;" *ngIf="showIncorrect">Incorrect</h4>
</div>
<div style="position: absolute;
bottom: 0;
margin: 38%;
margin-bottom: 20px;">
<button style="background-color:#3f51b5;color:white;padding: 11px;font-size: 30px;margin-right: 10px;" mat-raised-button (click)="validateAnswer()">Submit</button>
<button style="background-color:#e53935;color:white;padding: 11px;font-size: 30px;" mat-raised-button (click)="close()">Close</button>
</div>

<div *ngIf="Counter > 0" style="right: 0;
position: absolute;
top: 0;
background-color: #F44336;
padding: 21px;
color: white;
margin-right: 10px;
height: 66px;
border-radius: 50%;
margin-top: 10px; ">
<h2 style="margin-top: -14px;font-size: 40px;">{{Counter}}</h2></div>

</mat-dialog-content>`,
  styleUrls: ['./home.component.scss']
})
export class QuestionComponent implements OnInit {
  description: string;
  data: any;
  teams: any;
  CountDown:any;
  teamName: any;
  teamIndex:any;
  showCorrect: boolean = false;
  showIncorrect: boolean = false;
  SelectedAnswer: any;
  Counter: any;
  ngOnInit() {
  }
  constructor(
    private dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    public dataPushservice: DatapushService) {
    this.data = data;
    this.data.answered = false;
    this.teamName = data.teamName;
    this.teams = data.teams;
    this.teamIndex = data.teamIndex;
    this.setTime();
  }

  setTime() {
    let counter = 25;
    this.CountDown = setInterval(() => {
      if (counter > 0) {
        counter--;
        this.Counter = counter;
      }
      else {
        clearInterval(this.CountDown);
        this.Counter = 0;
      }
    }, 1000);
  }
  teamIndexCall(id){
    this.teamIndex = id;
  }
  validateAnswer(){
    this.Counter = 0;
    clearInterval(this.CountDown);
    $('.mat-dialog-container').css('background-color','#464646');
    $('.mat-dialog-container').css('color','white');
    if(this.SelectedAnswer == this.data.answer)
    {
      this.showCorrect = true;
      this.showIncorrect = false;
      this.teams[this.teamIndex].points = this.teams[this.teamIndex].points + this.data.points ;
      this.data.answeredBy = this.teams[this.teamIndex].shortName;
      this.data.answered = true;
      this.data.teamName = this.teamName;
      this.data.teamIndex = this.teamIndex;
      console.log(this.teams);
      console.log(this.data);
      this.dataPushservice.updateBackendValue(this.teams,this.data);
    }
    else
    {
      this.showIncorrect = true;
      this.showCorrect = false;
      this.data.answeredBy = 'Computer'
      this.data.answered = true;
      this.dataPushservice.updateBackendValue(this.teams,this.data);

    }
  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}