import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { RouterModule, Routes } from '@angular/router';

const link:Routes=[
  {
    path:"",component:AddfriendComponent
  },
  {
    path:"",component:ViewfriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfriendComponent,
    ViewfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
