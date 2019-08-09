import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
// import { PropertyDetailPage } from '../pages/property-detail/property-detail';
// import { PropertyFormPage } from '../pages/property-form/property-form';
//import { ListingMapviewPage } from "../pages/listing-mapview/listing-mapview";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';
import { PropertyProvider } from '../providers/property/property';
import { UserManagerProvider } from '../providers/user-manager/user-manager';

import { BrMaskerModule } from 'brmasker-ionic-3';
import { HttpModule } from '@angular/http'; // for HTTP request
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
  //  HomePage,
  //   PropertyDetailPage,
  //   PropertyFormPage,
  //   ListingMapviewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrMaskerModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      //mode: 'md',
      backButtonText:'',
      //iconMode:'ios'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //  HomePage,
    // PropertyDetailPage,
    // PropertyFormPage,
    // ListingMapviewPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FileChooser,
    FilePath,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    SocialSharing,
    CallNumber,
    CommonProvider,
    PropertyProvider,
    UserManagerProvider
  ]
})
export class AppModule {}
