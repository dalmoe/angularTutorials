import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'vote',
  template: `
              <div class="voteDiv">
                <i
                  class="glyphicon glyphicon-menu-up"
                  [style.color]="isUp ? 'gold' : '#ccc'"
                  (click)="onUpClick()"
                ></i>
                <p> {{ voteNum }}</p>
                <i
                  class="glyphicon glyphicon-menu-down"
                  [style.color]="isDown ? 'gold' : '#ccc'"
                  (click)="onDownClick()"
                ></i>
              </div>
            `,
  styles: [`
            p{
              margin-top: 10px;
            }

            .glyphicon{
              cursor: pointer;
            }
          `]
})

export class VoteComponent{
  voteNum = 10;

  @Input() isUp = false;
  @Input() isDown = false;

  onUpClick(){
    if (!this.isUp){
      this.voteNum++;
      if(!this.isDown){
        this.isUp = true;
      }
      else{
        this.isDown = false;
      }
    }
  }

  onDownClick(){
    if (!this.isDown){
      this.voteNum--;
      if(!this.isUp){
        this.isDown = true;
      }
      else{
        this.isUp = false;
      }
    }
  }
}
