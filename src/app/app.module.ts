import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { MaynoothComponent } from './maynooth/maynooth.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MaynoothComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
