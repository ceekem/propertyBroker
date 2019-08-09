import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-notification-detail',
  templateUrl: 'notification-detail.html',
})
export class NotificationDetailPage {
  private notificationData:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private callNumber: CallNumber) {
       this.notificationData = this.navParams.get('notificationData');
       console.log(this.notificationData);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailPage');
  }

  close(){ this.navCtrl.pop(); }

  callMember(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  goToProperty(pObj){
    this.navCtrl.push('PropertyDetailPage',{propertydata:pObj})
  }

}
