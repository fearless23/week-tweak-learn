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

// Roouter for Root Modules
import { AppRoutingModule, rc } from './app.routing';
import {ContactModule} from './contact/contact.module';

import { AuthGuard } from './auth.service';

// Root Component
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    ContactModule,
    
  ],
  declarations: [
    AppComponent,
    rc
  ],
  providers: [  AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
