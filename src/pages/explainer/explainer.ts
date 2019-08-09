import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ExplainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explainer',
  templateUrl: 'explainer.html',
})
export class ExplainerPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplainerPage');
  }
  startLogin(){
    this.storage.set("explainer",'viewed').then((data)=>{
        this.navCtrl.push('LoginPage');
    });
  }
}
