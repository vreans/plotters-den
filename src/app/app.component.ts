import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public technologyName ;
  public roundName ;
  public headerShow : boolean = true;
  public teamHeaderShow : boolean = false;
  public backToView: boolean = false;
  public order: string = "points";
  public reverse:boolean = true;
  disableSelect = new FormControl(false);

  public technologies: Array<object> = [
    {value: 'java/UI', viewValue: 'Java/Javascript'},
    {value: '.net', viewValue: '.Net'},
    {value: 'iseries', viewValue: 'Iseries'}
  ];
  public rounds:Array<object> =  [
    {
      name : "Round 1",
      questions: 20
    },
    {
      name : "Round 2",
      questions: 20
    },
    {
      name : "Round 3",
      questions: 20
    },
    {
      name : "Round 4",
      questions: 20
    },
    {
      name : "Round 5",
      questions: 20
    },
  ];
  public teams:Array<object> = [
    {name:"Chennai Super Kings",points:20},
    {name:"Delhi Daredevils",points:60},
    {name:"Kings XI Punjab",points:46},
    {name:"Mumbai Indians",points:36},
    {name : "Royal Challengers Banglore",points:45},
    {name:"Rajastan Royals",points:75},
    {name:"Kolkata Knight Riders" ,points:90},
    {name:"Sunrisers Hydrabad",points:20}
  ];

  constructor(){
  }

  showTeamdashboard(){
    var settings = $('.settings');
      settings.toggleClass('show');
  }

  TriggerValue(){
this.roundName = '';
  }
  roundSelected(){
 //   this.backToView = false
    console.log(this.technologyName);
this.goBack();
  }
  ShowHeader(){
    $('#header').fadeIn(400);
    $('#teamHeader').fadeOut(400);
    this.headerShow = true;
    this.teamHeaderShow = false;
    this.backToView = true;
  }
  goBack(){
    $('#header').fadeOut(400);
    $('#teamHeader').fadeIn(400);
    this.headerShow = false;
    this.teamHeaderShow = true;
    this.backToView = false;
  }
  resetBackView()
  {
    this.backToView = false;

  }
}
