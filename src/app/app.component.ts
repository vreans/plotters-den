import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DatapushService } from './home/datapush.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public technologyName;
  public roundName;
  public teamName;
  backendData: any;
  items: Observable<any[]>;
  public headerShow: boolean = true;
  public teamHeaderShow: boolean = false;
  public backToView: boolean = false;
  public teamsBackend:any;
  public order: string = "points";
  teamIndex: any;
  public questions: any;
  public reverse: boolean = true;
  disableSelect = new FormControl(false);
  dbrecord: AngularFireObject<any>;
    public technologies: Array<any>;
  public rounds: Array<object>;
  public teams: Array<object>;

  constructor(public db: AngularFireDatabase, public datapushservice: DatapushService) {
    this.datapushservice.bSubject.subscribe(result => {
      this.processDataforbackendpush(result);
    })
    this.items = this.db.list('/').valueChanges();
   
    this.items.forEach(data => {
      this.backendData = data;
      this.ProcessData();
    })
  }
  processDataforbackendpush(data) {
    if (data != 'data') {
      let i;
      console.log(data);
      delete data.question['teams'];
      let questionNumber = data.question.id;
      console.log(this.technologyName);
      console.log(this.roundName);
      if (this.technologyName == 'JavaUI') {
        i = 0
      }
      if (this.technologyName == 'Iseries') {
        i = 1;
      }
      if(this.technologyName == 'dotnet')
      {
        i =2;
      }
      this.dbrecord = this.db.object('/rounds/'+i+'/Questions/'+this.roundName+'/'+(questionNumber-1));
      console.log(this.backendData[0][i].Questions[this.roundName][questionNumber+1]);
      this.teamsBackend = this.db.object('/rounds/'+i+'/teams/');
      this.dbrecord.set(data.question);
      this.teamsBackend.set(data.teams);
    }

  }
  ProcessData() {
    console.log(this.backendData);
    this.technologies = this.backendData[2];

  }
  showTeamdashboard() {
    var settings = $('.settings');
    settings.toggleClass('show');
  }
  teamIndexCall(i) {
    this.teamIndex = i;
  }
  TriggerValue() {
    this.roundName = '';
  }
  roundSelected() {
    var teamDetails = this.backendData[0];
    for (let j = 0; j < teamDetails.length; j++) {
      if (teamDetails[j].name == this.technologyName) {
        this.teams = teamDetails[j].teams;
        this.questions = teamDetails[j].Questions[this.roundName];
        console.log(this.questions);
      }
    }

    this.goBack();
  }
  ShowHeader() {
    $('#header').fadeIn(400);
    $('#teamHeader').fadeOut(400);
    this.headerShow = true;
    this.teamHeaderShow = false;
    this.backToView = true;
  }
  goBack() {
    $('#header').fadeOut(400);
    $('#teamHeader').fadeIn(400);
    this.headerShow = false;
    this.teamHeaderShow = true;
    this.backToView = false;
  }
  resetBackView(technology) {
    var tech = technology;
    this.rounds = this.backendData[3][tech];
    console.log(this.rounds);
    this.backToView = false;

  }
}
