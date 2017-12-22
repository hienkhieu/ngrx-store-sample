import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppState, Survey } from "./models";
import * as SurveyActions from "./actions";
import * as fromReducers from "./reducers";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // like = 0;
  // dislike = 0;

  survey$: Observable<Survey>;
  likes$: Observable<number>;
  likeMessage$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.survey$ = this.store.select("survey");
    this.likes$ = this.store.select(fromReducers.getLikes);
    this.likeMessage$ = this.store.select(fromReducers.getLikeMessage);
  }

  loveMessages = ["love it!", "like it!", "crazy about it!"];

  hateMessage = ["disgust!", "hate it!", "it's terrible!"];

  private generateMessage(source: string[]) {
    const randomNumber = Math.floor(Math.random() * 3);
    return source[randomNumber];
  }
  // tslint:disable-next-line:member-ordering
  title = "app";
  CountUp() {
    this.store.dispatch(
      new SurveyActions.LikeAction(this.generateMessage(this.loveMessages))
    );
    // this.like++;
  }

  CountDown() {
    this.store.dispatch(
      new SurveyActions.DislikeAction(this.generateMessage(this.hateMessage))
    );
    // this.dislike++;
  }
}
