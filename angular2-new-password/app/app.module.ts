import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NewPasswordComponent} from './new-password.component';
import {FormValidators} from './form-validators';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                ],
  declarations: [ AppComponent,
                  NewPasswordComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
