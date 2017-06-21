import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)">'
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange($event){
    console.log($event);
  }
}
