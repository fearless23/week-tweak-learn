// This is for Module Decoration 
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }     from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDDZqq-ZunPtltpY-zrt8uoFCE3i-tRUT0',
  authDomain: 'week-tweak-learn.firebaseapp.com',
  databaseURL: 'https://week-tweak-learn.firebaseio.com',
  storageBucket: 'week-tweak-learn.appspot.com',
  messagingSenderId: '847520306136'
};

// Roouter for Root Modules
import { AppRoutingModule, rc } from './app.routing';

import { AuthGuard } from './auth.service';

// Root Component
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    rc
  ],
  providers: [  AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
