import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  template: `
              <i class="glyphicon glyphicon-heart"
                 [style.color]="isLiked ? 'deeppink' : '#ccc'"
                 (click)="onClick()">
              </i>
              <i>{{ likeNum }}</i>
            `,
  styles: [`
            .glyphicon-heart{
              cursor: pointer
            }
          `],
})

export class LikeComponent{
  @Input() isLiked = false;
  @Input() likeNum = 10;
  @Output() change = new EventEmitter();

  onClick(){
    this.isLiked = !this.isLiked;
    if(this.isLiked){
      this.likeNum += 1;
    }
    else{
      this.likeNum -= 1;
    }
  }
}
