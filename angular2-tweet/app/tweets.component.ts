import {Component, Input} from '@angular/core';

@Component({
  selector: 'tweets',
  template: `
              <div class="media">
                <div class = "media-left">
                  <a href="http://lorempixel.com/100/100/people?{{likeNum}}">
                    <img class ="media-object" src="http://lorempixel.com/100/100/people?{{likeNum}}" alt="Photo">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">{{ name }} <span id="user" style="color: #ccc">{{ user }}</span></h4>
                  <p>{{ text }}</p>
                  <like [likeNum]="this.likeNum"></like>
                </div>
              </div>
            `,
})

export class TweetsComponent{
  @Input() name = "Test";
  @Input() user="@test";
  @Input() text = "Test Test Test";
  @Input() likeNum="0";
}
