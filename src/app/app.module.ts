// This is for Module Decoration 
import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDDZqq-ZunPtltpY-zrt8uoFCE3i-tRUT0",
  authDomain: "week-tweak-learn.firebaseapp.com",
  databaseURL: "https://week-tweak-learn.firebaseio.com",
  storageBucket: "week-tweak-learn.appspot.com",
  messagingSenderId: "847520306136"
};
// Root Component
import { AppComponent } from './app.component';
//import { MenuComponent }      from './menu/menu.component';
// Roouter for Root Modules
import { AppRoutingModule, rc } from './app.routing';

import {ContactModule} from './contact/contact.module';
import { AuthGuard } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    //MenuComponent,
    rc
  ],
  providers: [  AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
