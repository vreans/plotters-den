import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatDialogModule
} 
from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrderModule } from 'ngx-order-pipe';
import { QuestionComponent } from './home/question.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { DatapushService } from './home/datapush.service';
import { AnsweredPipe } from './home/answered.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    AnsweredPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CommonModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule  
  ],
  providers: [DatapushService],
  bootstrap: [AppComponent],
  entryComponents: [QuestionComponent]
})
export class AppModule { }
