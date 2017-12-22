import {AngularFontAwesomeModule} from 'angular-font-awesome';

import { StoreModule, Store } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SurveyReducer } from './reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({survey: SurveyReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
