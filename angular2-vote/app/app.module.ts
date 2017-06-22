import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {VoteComponent} from './vote.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  VoteComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
