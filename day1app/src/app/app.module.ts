import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundcompComponent } from './backgroundcomp/backgroundcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
