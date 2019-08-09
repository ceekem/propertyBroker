import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, Events } from 'ionic-angular';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { CommonProvider } from '../../providers/common/common';
import { Storage } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  public isRecAvailable:boolean=true;
  private listData:any;
  private infiniteScrollComplete:any;
  private paged:any;

  constructor(
    public navCtrl: NavController,
    private storage:Storage,
    private userManager:UserManagerProvider,
    private common:CommonProvider,
    public alertCtrl: AlertController,
    private ev:Events,
    private callNumber: CallNumber,
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.isRecAvailable = true;
    this.paged = 1;
    let result:any;
    let postData = {page:this.paged,limit:20}
    this.common.showLoading();
    this.userManager.getAppointment(postData)
    .then((res)=>{
         console.log(res);
         result = res;
         //-------------------
         if(result.status){
           this.listData = result.data;
           this.paged++;

           if(this.paged==2){
             if(result.total_appointments!='' && typeof(result.total_appointments)!='undefined'){
               this.storage.set("total_appointments",result.total_appointments)
               .then((res)=>{
                  this.ev.publish('check_appointments',result.total_appointments);
                  this.ev.publish('clearNotification',{});
               });
             }
           }

         }else{
           this.isRecAvailable = false;
           if(this.paged==1 && !result.loginstatus && typeof(result.loginstatus)!='undefined'){
               this.storage.set("userData",'');
               this.navCtrl.push('LoginPage');
               this.common.showAlert(result.msg);
           }
         }
         this.common.hideLoading();
         //--------------------
     }, err=> {
       if(this.paged==1)this.isRecAvailable = false;
       this.common.hideLoading();
       this.common.showError(err);
     });
  }

  doRefresh(refresher){
    //console.log('ref',ref);
    this.listData = [];
    let result:any;
    this.paged = 1;
    this.isRecAvailable = true;
    this.infiniteScrollComplete = false;
    let postData = {page:this.paged,limit:20}
    this.userManager.getAppointment(postData).then((res)=>{
        result = res;
        if(result.status){
            this.paged++;
            this.listData = this.listData.concat(result.data);
        }else{
            this.isRecAvailable = false;
            this.infiniteScrollComplete = true;
        }
          refresher.complete();
    }, err=> {
      refresher.complete();
      if(this.paged==1)this.isRecAvailable = false;
      this.common.showError(err);
    });

  }

  callMember(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }


  goToNotification(notificationData){
    let notificationModal = this.modalCtrl.create('NotificationDetailPage',{notificationData:notificationData});
    notificationModal.present();
  }
}
