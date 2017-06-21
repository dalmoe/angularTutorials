import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: 'app/favorite.template.html',
  styles: [`
            .glyphicon-star {
              color: orange;
            }
          `],
})
export class FavoriteComponent{
  @Input('is-favorite') isActive = false;

  @Output() change = new EventEmitter();

  onClick(){
    this.isActive = !this.isActive;
    this.change.emit({newValue: this.isActive});
  }
}
