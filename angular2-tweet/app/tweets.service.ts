import {Injectable} from '@angular/core';

@Injectable()
export class TweetsService{
  getTweets() {
    return [
      {'name': 'John Doe', 'user': '@johndoe', 'text': 'This is a tweet', 'likeNum': 2},
      {'name': 'Jane Doe', 'user': '@janedoe', 'text': 'This is another tweet', 'likeNum': 5},
      {'name': 'Kanye West', 'user': '@kanye', 'text': 'Im the glitch!', 'likeNum': 200},
    ]
  }
}
