import { Component } from '@angular/core';
import {TweetsService} from './tweets.service';

@Component({
  selector: 'my-app',
  template: `<tweets
                    *ngFor="let tweet of tweets"
                    [name]="tweet.name"
                    [user]="tweet.user"
                    [text]="tweet.text"
                    [likeNum]="tweet.likeNum">
             </tweets>

            `
})
export class AppComponent {
  tweets;

  constructor(TweetsService: TweetsService){
    this.tweets = TweetsService.getTweets();
  }
}
