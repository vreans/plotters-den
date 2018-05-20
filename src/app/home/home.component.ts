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
@Input() questions: any;
@Input() teamName:any;
@Input() teams:any;
@Input() teamIndex:any;
constructor(private dialog: MatDialog) {}

  ngOnInit() {  
  }

  openDialog(index) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.questions[index-1];
    dialogConfig.data.teams = this.teams;
    dialogConfig.data.teamName = this.teamName;
    dialogConfig.data.teamIndex = this.teamIndex;


    this.dialog.open(QuestionComponent, dialogConfig);
}


showModal()
{
 
}
}
