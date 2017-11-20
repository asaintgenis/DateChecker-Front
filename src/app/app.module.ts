import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateFormComponent } from './date-form/date-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateResultComponent } from './date-result/date-result.component';

const appRoutes: Routes = [
  {
    path: 'date',
    component: DateFormComponent,
    data: { title: 'Date Checker' }
  },
  { path: '',
    redirectTo: '/date',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DateFormComponent,
    NavBarComponent,
    DateResultComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
