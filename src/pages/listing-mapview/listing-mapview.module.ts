import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListingMapviewPage } from './listing-mapview';

@NgModule({
  declarations: [
    ListingMapviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ListingMapviewPage),
  ],
})
export class ListingMapviewPageModule {}
