import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';

import {SimpleFormComponent} from './simple-form.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                ],
  declarations: [ AppComponent,
                  SimpleFormComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
