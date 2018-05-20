import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapushService {

  public bSubject = new BehaviorSubject("data"); 
  
  updateBackendValue(teams,data){
    let datapush;
    datapush = {
      teams: teams,
      question: data
    }
    this.bSubject.next(datapush);
  }

  constructor() { }
}
