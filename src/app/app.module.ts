import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateFormComponent } from './date-form/date-form.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DateFormComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',                    component: DateFormComponent},
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
