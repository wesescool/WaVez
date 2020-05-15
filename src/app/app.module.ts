import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 

import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionPageModule } from './option/option.module';
import { PlaysongPageModule } from './playsong/playsong.module';


import { AngularFireModule } from 'angularfire2';
import {GooglePlus} from '@ionic-native/google-plus';
export const firebaseConfig = {

};
// import { from } from 'rxjs';

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
	  BrowserModule,
	  IonicModule.forRoot(), 
	  AppRoutingModule,
    OptionPageModule,
    PlaysongPageModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireModule,
      // ComponetsModule
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativePageTransitions,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
