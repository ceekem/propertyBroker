import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplainerPage } from './explainer';

@NgModule({
  declarations: [
    ExplainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplainerPage),
  ],
})
export class ExplainerPageModule {}
