import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {FavoriteComponent} from './favorite.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  FavoriteComponent    
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
