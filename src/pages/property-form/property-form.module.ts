import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyFormPage } from './property-form';

@NgModule({
  declarations: [
    PropertyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyFormPage),
  ],
})
export class PropertyFormPageModule {}
