import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState, Survey } from './models';
import * as SurveyActions from './actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // like = 0;
  // dislike = 0;

  survey$: Observable<Survey>;

  constructor(private store: Store<AppState>) {
    this.survey$ = this.store.select('survey');
  }

  title = 'app';
  CountUp() {
    this.store.dispatch(new SurveyActions.LikeAction());
    // this.like++;
  }

  CountDown() {
    this.store.dispatch(new SurveyActions.DislikeAction());
    // this.dislike++;
  }
}
