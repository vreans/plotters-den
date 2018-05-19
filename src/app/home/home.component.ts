import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input() dataSet: string ;
  public Questions:Array<object> = [
    { id: 1, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 2, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 3, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 4, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 5, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 6, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 7, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 8, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 9, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 10, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 11, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 12, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 13, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 14, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 15, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 16, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 17, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 18, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 19, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 20, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 21, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 22, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 23, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 24, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 25, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 26, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 27, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 28, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 29, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 30, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 31, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 32, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},
    { id: 33, question : "What is your name ?", options : ['alpha','beta','gamma','tesla'], answer : 'alpha', point : 20},

  ]

  constructor(private dialog: MatDialog) {}

  ngOnInit() {  
  }

  openDialog(index) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.Questions[index];

    this.dialog.open(QuestionComponent, dialogConfig);
}


showModal()
{
 
}
}
